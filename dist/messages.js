"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.successMessage = successMessage;
exports.errorMessage = errorMessage;
const chalk_1 = __importDefault(require("chalk"));
function successMessage(boilerplateChoice) {
    console.log(chalk_1.default.green('\n✔  Project created successfully! \n'));
    console.log(chalk_1.default.yellow.bold("              *       ˜"));
    console.log(chalk_1.default.cyan.bold("        ˜                  |"));
    console.log(chalk_1.default.red.bold("    ()    .-.,='``'=.    - o -"));
    console.log(chalk_1.default.yellow.bold("          '=/_       〵    |"));
    console.log(chalk_1.default.cyanBright.bold("       *   |  '=._    |"));
    console.log(chalk_1.default.yellow.bold("           \\      `=../`,        '"));
    console.log(chalk_1.default.redBright.bold("         .   '=.__.=' `='      *"));
    console.log(chalk_1.default.yellow.bold("˜                         +"));
    console.log(chalk_1.default.cyanBright.bold("     O      *        '       .\n"));
    console.log('Well done 🎉🎉,', chalk_1.default.green('A Boilerplates is created with coffee & passion by', chalk_1.default.green.bold.underline('Shuashuaa'), chalk_1.default.whiteBright('\nFor more info: >>'), chalk_1.default.green.underline('https://github.com/Shuashuaa/v-kit-spa\n')));
    if (boilerplateChoice == "158" || boilerplateChoice == "159") {
        console.log(chalk_1.default.bgBlack('Install Dependencies:'), chalk_1.default.cyanBright('npm install') + ',', chalk_1.default.cyanBright('composer install') + ',', chalk_1.default.cyanBright('\ncopy .env.example .env'), 'and', chalk_1.default.cyanBright('php artisan key:generate'));
        console.log(chalk_1.default.bgBlack('Run Project:'), chalk_1.default.cyanBright('npm run artisan-watch') + '.\n');
    }
    else if (boilerplateChoice == "160" || boilerplateChoice == "161" || boilerplateChoice == "162") {
        console.log(chalk_1.default.bgBlack('Install Dependencies:'), chalk_1.default.cyanBright('yarn install') + ',', chalk_1.default.cyanBright('composer install') + ',', chalk_1.default.cyanBright('\ncopy .env.example .env'), 'and', chalk_1.default.cyanBright('php artisan key:generate'));
        console.log(chalk_1.default.bgBlack('Run Project:'), chalk_1.default.cyanBright('npm run artisan-dev') + '.\n');
    }
    console.log(chalk_1.default.bgBlack('Visit:'), chalk_1.default.bold('http://127.0.0.1:8000\n'));
}
function errorMessage(error) {
    console.error(chalk_1.default.red.inverse(`\n✖ Error creating project. ${error.message}`));
}
// console.log(chalk.yellow('     /\_/\ \n    ( o.o )\n     >^<\n'));
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
