"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.successMessage = successMessage;
exports.errorMessage = errorMessage;
const chalk_1 = __importDefault(require("chalk"));
function successMessage(sourceVal) {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log(sourceVal)
        let tempVal = '';
        if (sourceVal == '158') {
            tempVal = 'Vue2-Laravel8';
        }
        else if (sourceVal == '159') {
            tempVal = 'Vue3-Laravel8';
        }
        else if (sourceVal == '160') {
            tempVal = 'Vue3-Laravel9';
        }
        else if (sourceVal == '161') {
            tempVal = 'Vue3-Laravel10';
        }
        else if (sourceVal == '162') {
            tempVal = 'Vue3-Laravel11';
        }
        console.log(chalk_1.default.green(`\n✔  ${tempVal} boilerplate is successfully downloaded!. \n`));
        setTimeout(() => {
            console.log(chalk_1.default.yellow.bold("              *       ˜"));
            console.log(chalk_1.default.cyan.bold("        ˜                  |"));
            console.log(chalk_1.default.red.bold("    ()    .-.,='``'=.    - o -"));
            console.log(chalk_1.default.yellow.bold("          '=/_       〵    |"));
            console.log(chalk_1.default.cyanBright.bold("       *   |  '=._     )"));
            console.log(chalk_1.default.yellow.bold("           \\      `=../`,        '"));
            console.log(chalk_1.default.redBright.bold("         .   '=.__.=' `='      *"));
            console.log(chalk_1.default.yellow.bold("˜                         +"));
            console.log(chalk_1.default.cyanBright.bold("     O      *        '       .\n"));
        }, 300);
        setTimeout(() => {
            console.log('Well done 🎉🎉,', chalk_1.default.green('These Boilerplates are created with coffee & passion by', chalk_1.default.green.bold.underline('Shuashuaa'), chalk_1.default.whiteBright('\nFor more info: >>'), chalk_1.default.green.underline('https://github.com/Shuashuaa/v-kit-spa\n')));
        }, 800);
        setTimeout(() => {
            if (sourceVal == "158" || sourceVal == "159") {
                console.log(chalk_1.default.bgBlack('Locate Project:'), chalk_1.default.cyanBright('cd project_name,'));
                console.log(chalk_1.default.bgBlack('Install Dependencies:'), chalk_1.default.cyanBright('npm install') + ',', chalk_1.default.cyanBright('composer install') + ',', chalk_1.default.cyanBright('\ncopy .env.example .env'), 'and', chalk_1.default.cyanBright('php artisan key:generate'));
                console.log(chalk_1.default.bgBlack('Run Project:'), chalk_1.default.cyanBright('npm run artisan-watch') + '.\n');
            }
            else if (sourceVal == "160" || sourceVal == "161" || sourceVal == "162") {
                console.log(chalk_1.default.bgBlack('Locate Project:'), chalk_1.default.cyanBright('cd project_name,'));
                console.log(chalk_1.default.bgBlack('Install Dependencies:'), chalk_1.default.cyanBright('yarn install') + ',', chalk_1.default.cyanBright('composer install') + ',', chalk_1.default.cyanBright('\ncopy .env.example .env'), 'and', chalk_1.default.cyanBright('php artisan key:generate'));
                console.log(chalk_1.default.bgBlack('Run Project:'), chalk_1.default.cyanBright('npm run artisan-dev') + '.\n');
            }
            console.log(chalk_1.default.bgBlack('Visit:'), chalk_1.default.bold('http://127.0.0.1:8000\n'));
        }, 500);
    });
}
function errorMessage(error) {
    console.error(chalk_1.default.red.inverse(`\n✖ Error creating project. ${error.message}`));
}
