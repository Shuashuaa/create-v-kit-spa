import chalk from 'chalk';

const cliProgress = require('cli-progress');

export async function successMessage() {

  console.log(chalk.green('\n✔  Project created successfully! \n'));
    // console.log(chalk.yellow('     /\_/\ \n    ( o.o )\n     >^<\n'));
    
    console.log(chalk.yellow.bold("              *       ˜"));
    console.log(chalk.cyan.bold("        ˜                  |"));
    console.log(chalk.red.bold("    ()    .-.,='``'=.    - o -"));
    console.log(chalk.yellow.bold("          '=/_       〵    |"));
    console.log(chalk.cyanBright.bold("       *   |  '=._     )"));
    console.log(chalk.yellow.bold("           \\      `=../`,        '"));
    console.log(chalk.redBright.bold("         .   '=.__.=' `='      *"));
    console.log(chalk.yellow.bold("˜                         +"));
    console.log(chalk.cyanBright.bold("     O      *        '       .\n"));
    
    // console.log(chalk.yellow("              *       +"));
    // console.log(chalk.yellow("        '                  |"));
    // console.log(chalk.yellow("    ()    .-.,='``'=.    - o -"));
    // console.log(chalk.yellow("          '=/_       〵     |"));
    // console.log(chalk.yellow("       *   |  '=._    |"));
    // console.log(chalk.yellow("           \\      `=../`,        '     ╱|\\\\"));
    // console.log(chalk.yellow("         .   '=.__.=' `='      *      (˚ˎ。7  "));
    // console.log(chalk.yellow("+                         +           |、˜〵  "));
    // console.log(chalk.yellow("     O      *        '       .        じしˍ,)ノ\n"));
    // console.log(chalk.yellow("                 ╱|\\\\\n                (˚ˎ。7  \n                |、˜〵          \n                じしˍ,)ノ\n"));
    
    //                  *       +
    //            '                  |
    //        ()    .-.,="``"=.    - o -
    //              '=/_       \     |
    //           *   |  '=._    |
    //                \     `=./`,        '
    //             .   '=.__.=' `='      *
    //    +                         +
    //         o      *        '       .

    console.log('Well done 🎉🎉,',chalk.green('A Boilerplates is created with coffee & passion by', chalk.green.bold.underline('Shuashuaa'), chalk.whiteBright('\nFor more info: >>'), chalk.green.underline('https://github.com/Shuashuaa/v-kit-spa\n')));
    
    console.log(chalk.bgBlack('Install Dependencies:'), chalk.cyanBright('npm install') , 'or' , chalk.cyanBright('yarn install')+',', chalk.cyanBright('\ncopy .env.example .env')+',',chalk.cyanBright('php artisan key:generate'), 'and' , chalk.cyanBright('composer install')+'.');
    console.log(chalk.bgBlack('Run Project:'), chalk.cyanBright('npm run artisan-watch')+'.\n');
    console.log(chalk.bgBlack('Visit:'), chalk.bold('http://127.0.0.1:8000\n'));

}

export function errorMessage(error: Error) {
  console.error(chalk.red.inverse(`\n✖ Error creating project. ${error.message}`));
}