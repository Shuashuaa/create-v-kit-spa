import chalk from 'chalk';
import { note } from '@clack/prompts';
import { TEMPLATES } from './prompts';

// Templates whose install hint uses npm; the rest use yarn.
const NPM_TEMPLATES = ['158', '159'];

export function successMessage(sourceVal: string, projectName: string) {
  const label = TEMPLATES.find((t) => t.id === sourceVal)?.label ?? sourceVal;
  const isNpm = NPM_TEMPLATES.includes(sourceVal);
  const installCmd = isNpm ? 'npm install' : 'yarn install';
  const runCmd = isNpm ? 'npm run artisan-watch' : 'npm run artisan-dev';

  console.log(chalk.green(`\n✔  ${label} boilerplate downloaded\n`));

  // Signature art — created with coffee & passion.
  console.log(chalk.yellow.bold("              *       ˜"));
  console.log(chalk.cyan.bold("        ˜                  |"));
  console.log(chalk.red.bold("    ()    .-.,='``'=.    - o -"));
  console.log(chalk.yellow.bold("          '=/_       〵    |"));
  console.log(chalk.cyanBright.bold("       *   |  '=._     )"));
  console.log(chalk.yellow.bold("           \\      `=../`,        '"));
  console.log(chalk.redBright.bold("         .   '=.__.=' `='      *"));
  console.log(chalk.yellow.bold("˜                         +"));
  console.log(chalk.cyanBright.bold("     O      *        '       .\n"));

  const steps = [
    `cd ${projectName}`,
    installCmd,
    'composer install',
    'copy .env.example .env',
    'php artisan key:generate',
    runCmd,
  ]
    .map((cmd, i) => `${chalk.dim(`${i + 1}.`)} ${chalk.cyan(cmd)}`)
    .join('\n');

  note(steps, 'Next steps');

  console.log(
    chalk.dim('   built with coffee & passion by ') + chalk.green.underline('Joshua Tania'),
  );
  console.log(
    chalk.dim('   github.com/Shuashuaa/create-v-kit-spa') +
      chalk.dim(' · ') +
      chalk.dim('gitlab.com/shuashuaa/create-v-kit-spa') +
      '\n',
  );
}

export function errorMessage(error: Error) {
  console.error(chalk.red.inverse(`\n✖ Error creating project. ${error.message}`));
}
