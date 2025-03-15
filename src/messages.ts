import chalk from 'chalk';
import { fileNameVariable } from './prompts';

export async function successMessage(sourceVal: string) {

  // console.log(sourceVal)
  let tempVal = '';
  if(sourceVal == '158'){ tempVal = 'Vue2-Laravel8' }else if(sourceVal == '159'){ tempVal = 'Vue3-Laravel8' }else if(sourceVal == '160'){ tempVal = 'Vue3-Laravel9' }else if(sourceVal == '161'){ tempVal = 'Vue3-Laravel10' }else if(sourceVal == '162'){ tempVal = 'Vue3-Laravel11' }

  console.log(chalk.green(`\n✔  ${tempVal} boilerplate is successfully downloaded!. \n`));

  setTimeout(() => {
    console.log(chalk.yellow.bold("              *       ˜"));
    console.log(chalk.cyan.bold("        ˜                  |"));
    console.log(chalk.red.bold("    ()    .-.,='``'=.    - o -"));
    console.log(chalk.yellow.bold("          '=/_       〵    |"));
    console.log(chalk.cyanBright.bold("       *   |  '=._     )"));
    console.log(chalk.yellow.bold("           \\      `=../`,        '"));
    console.log(chalk.redBright.bold("         .   '=.__.=' `='      *"));
    console.log(chalk.yellow.bold("˜                         +"));
    console.log(chalk.cyanBright.bold("     O      *        '       .\n"));
  }, 300);

  setTimeout(() => {
    console.log('Well done 🎉🎉,',chalk.green('These Boilerplates are created with coffee & passion by', chalk.green.underline('Joshua Tania'), chalk.whiteBright('\nFor more info (github): >>'), chalk.green.underline('https://github.com/Shuashuaa/create-v-kit-spa'), chalk.whiteBright('\nFor more info (gitlab): >>'), chalk.green.underline('https://gitlab.com/shuashuaa/create-v-kit-spa\n')));
  }, 800);

  setTimeout(() => {
    if (sourceVal == "158" || sourceVal == "159") {
      console.log(chalk.bgBlack('Locate Project:'), chalk.cyanBright(`cd ${fileNameVariable},`));
      console.log(chalk.bgBlack('Install Dependencies:'), chalk.cyanBright('npm install') + ',', chalk.cyanBright('composer install') + ',', chalk.cyanBright('\ncopy .env.example .env'), 'and', chalk.cyanBright('php artisan key:generate'));
      console.log(chalk.bgBlack('Run Project:'), chalk.cyanBright('npm run artisan-watch') + '.\n');
    }
    else if (sourceVal == "160" || sourceVal == "161" || sourceVal == "162") {
      console.log(chalk.bgBlack('Locate Project:'), chalk.cyanBright(`cd ${fileNameVariable},`));
      console.log(chalk.bgBlack('Install Dependencies:'), chalk.cyanBright('yarn install') + ',', chalk.cyanBright('composer install') + ',', chalk.cyanBright('\ncopy .env.example .env'), 'and', chalk.cyanBright('php artisan key:generate'));
      console.log(chalk.bgBlack('Run Project:'), chalk.cyanBright('npm run artisan-dev') + '.\n');
    }

    console.log(chalk.bgBlack('Visit:'), chalk.bold('http://127.0.0.1:8000\n'));
  }, 500);

}

export function errorMessage(error: Error) {
  console.error(chalk.red.inverse(`\n✖ Error creating project. ${error.message}`));
}