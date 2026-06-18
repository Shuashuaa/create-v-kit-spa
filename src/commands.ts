import path from 'path';
import fs from 'fs';
import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { intro, outro, spinner, log } from '@clack/prompts';
import { copyProjectStructure } from './utils';
import { getProjectName, getTemplateChoice, detectPhp, TEMPLATES } from './prompts';
import { successMessage, errorMessage } from './messages';

async function createProject() {
  const argv = await yargs(hideBin(process.argv))
    .scriptName('create-v-kit-spa')
    .option('template', {
      alias: 't',
      type: 'string',
      describe: `Boilerplate id (${TEMPLATES.map((t) => t.id).join(', ')}) — skips the prompt`,
    })
    .help()
    .parse();

  intro(chalk.bgCyan.black(' create-v-kit-spa '));

  // Project name: positional arg wins, otherwise prompt.
  const projectName = argv._[0] ? String(argv._[0]) : await getProjectName();
  const destinationPath = path.join(process.cwd(), projectName);

  if (fs.existsSync(destinationPath)) {
    errorMessage(new Error(`The directory "${projectName}" already exists.`));
    process.exit(1);
  }

  // Scan PHP (informational — boilerplates still install without it locally).
  const phpSpinner = spinner();
  phpSpinner.start('Scanning php');
  const phpVersion = await detectPhp();
  phpSpinner.stop(
    phpVersion
      ? `php ${phpVersion} detected`
      : 'php not found in PATH — install it before running the project',
  );

  // Template: --template flag wins (validated), otherwise prompt.
  let templateId = argv.template;
  if (templateId && !TEMPLATES.some((t) => t.id === templateId)) {
    errorMessage(
      new Error(`Invalid template "${templateId}". Valid ids: ${TEMPLATES.map((t) => t.id).join(', ')}`),
    );
    process.exit(1);
  }
  if (!templateId) templateId = await getTemplateChoice();

  const template = TEMPLATES.find((t) => t.id === templateId)!;
  const sourcePath = path.join(__dirname, '../lib', template.id);

  const copySpinner = spinner();
  copySpinner.start(`Creating ${template.label} project`);
  try {
    await fs.promises.mkdir(destinationPath);
    await copyProjectStructure(sourcePath, destinationPath);
    copySpinner.stop(`Created ${chalk.cyan(projectName)} (${template.label})`);
  } catch (error: any) {
    copySpinner.stop('Failed to create project');
    errorMessage(error);
    process.exit(1);
  }

  successMessage(template.id, projectName);
  outro(chalk.green(`${template.label} ready`) + chalk.dim('  ·  ') + chalk.cyan('http://127.0.0.1:8000'));
}

createProject().catch((error: any) => {
  log.error(error?.message ?? String(error));
  process.exit(1);
});
