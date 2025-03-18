import path from 'path';
import fs from 'fs';
import { copyProjectStructure } from './utils';
import { getProjectName, getBoilerplateChoice, closeReadline } from './prompts';
import { errorMessage } from './messages';
import { getCount } from './count';
import yargs from 'yargs';


async function createProject() {
  const argv = yargs.argv;
  let projectName = process.argv[2];

  if (!projectName) {
    projectName = await getProjectName();
  }

  // Checks the Destination Path if the inserted project name is already exists
  const destinationPath = path.join(process.cwd(), projectName);
  const dirExists = await fs.promises
  .access(destinationPath, fs.constants.F_OK)
  .then(() => true)
  .catch(() => false);

  if (dirExists) {
    errorMessage(new Error(`\n✖ The directory "${projectName}" already exists.`));
    closeReadline();
    return;
  }

  // Proceeds to Selection of Boilerplate
  const boilerplateChoice = await getBoilerplateChoice();
  const templatePath = getTemplatePath(boilerplateChoice);

  if (!templatePath) {
    errorMessage(new Error('\n✖ Invalid boilerplate choice.'));
    closeReadline();
    return;
  }

  const sourcePath = path.join(__dirname, '../lib', templatePath);
  try {
    await fs.promises.mkdir(destinationPath);
    await copyProjectStructure(sourcePath, destinationPath);
    getCount(sourcePath, templatePath)

  } catch (error: any) {
    errorMessage(error);
  } finally {
    closeReadline();
  }
}

function getTemplatePath(boilerplateChoice: number): string | null {
  switch (boilerplateChoice) {
    case 1:
      return '158';
    case 2:
      return '159';
    case 3:
      return '160';
    case 4:
      return '161';
    case 5:
      return '162';
    default:
      return null;
  }
}

createProject();