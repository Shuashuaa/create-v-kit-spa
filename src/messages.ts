import chalk from 'chalk';
import { TEMPLATES } from './prompts';

// Templates whose install hint uses npm; the rest use yarn.
const NPM_TEMPLATES = ['158', '159'];

export function successMessage(sourceVal: string, projectName: string) {
  const label = TEMPLATES.find((t) => t.id === sourceVal)?.label ?? sourceVal;

  console.log(chalk.green(`\n✔  ${label} boilerplate is successfully downloaded!\n`));

  console.log(chalk.yellow.bold("              *       ˜"));
  console.log(chalk.cyan.bold("        ˜                  |"));
  console.log(chalk.red.bold("    ()    .-.,='``'=.    - o -"));
  console.log(chalk.yellow.bold("          '=/_       〵    |"));
  console.log(chalk.cyanBright.bold("       *   |  '=._     )"));
  console.log(chalk.yellow.bold("           \\      `=../`,        '"));
  console.log(chalk.redBright.bold("         .   '=.__.=' `='      *"));
  console.log(chalk.yellow.bold("˜                         +"));
  console.log(chalk.cyanBright.bold("     O      *        '       .\n"));

  console.log(chalk.bgBlack('Locate Project:'), chalk.cyanBright(`cd ${projectName},`));
  if (NPM_TEMPLATES.includes(sourceVal)) {
    console.log(chalk.bgBlack('Install Dependencies:'), chalk.cyanBright('npm install') + ',', chalk.cyanBright('composer install') + ',', chalk.cyanBright('\ncopy .env.example .env'), 'and', chalk.cyanBright('php artisan key:generate'));
    console.log(chalk.bgBlack('Run Project:'), chalk.cyanBright('npm run artisan-watch') + '.\n');
  } else {
    console.log(chalk.bgBlack('Install Dependencies:'), chalk.cyanBright('yarn install') + ',', chalk.cyanBright('composer install') + ',', chalk.cyanBright('\ncopy .env.example .env'), 'and', chalk.cyanBright('php artisan key:generate'));
    console.log(chalk.bgBlack('Run Project:'), chalk.cyanBright('npm run artisan-dev') + '.\n');
  }
  console.log(chalk.bgBlack('Visit:'), chalk.bold('http://127.0.0.1:8000\n'));

  console.log('Well done 🎉🎉,', chalk.green('These Boilerplates are created with coffee & passion by', chalk.green.underline('Joshua Tania'), chalk.whiteBright('\nFor more info (github): >>'), chalk.green.underline('https://github.com/Shuashuaa/create-v-kit-spa'), chalk.whiteBright('\nFor more info (gitlab): >>'), chalk.green.underline('https://gitlab.com/shuashuaa/create-v-kit-spa\n')));
}

export function errorMessage(error: Error) {
  console.error(chalk.red.inverse(`\n✖ Error creating project. ${error.message}`));
}
