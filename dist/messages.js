"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.successMessage = successMessage;
exports.errorMessage = errorMessage;
const chalk_1 = __importDefault(require("chalk"));
const prompts_1 = require("./prompts");
// Templates whose install hint uses npm; the rest use yarn.
const NPM_TEMPLATES = ['158', '159'];
function successMessage(sourceVal, projectName) {
    var _a, _b;
    const label = (_b = (_a = prompts_1.TEMPLATES.find((t) => t.id === sourceVal)) === null || _a === void 0 ? void 0 : _a.label) !== null && _b !== void 0 ? _b : sourceVal;
    console.log(chalk_1.default.green(`\n✔  ${label} boilerplate is successfully downloaded!\n`));
    console.log(chalk_1.default.yellow.bold("              *       ˜"));
    console.log(chalk_1.default.cyan.bold("        ˜                  |"));
    console.log(chalk_1.default.red.bold("    ()    .-.,='``'=.    - o -"));
    console.log(chalk_1.default.yellow.bold("          '=/_       〵    |"));
    console.log(chalk_1.default.cyanBright.bold("       *   |  '=._     )"));
    console.log(chalk_1.default.yellow.bold("           \\      `=../`,        '"));
    console.log(chalk_1.default.redBright.bold("         .   '=.__.=' `='      *"));
    console.log(chalk_1.default.yellow.bold("˜                         +"));
    console.log(chalk_1.default.cyanBright.bold("     O      *        '       .\n"));
    console.log(chalk_1.default.bgBlack('Locate Project:'), chalk_1.default.cyanBright(`cd ${projectName},`));
    if (NPM_TEMPLATES.includes(sourceVal)) {
        console.log(chalk_1.default.bgBlack('Install Dependencies:'), chalk_1.default.cyanBright('npm install') + ',', chalk_1.default.cyanBright('composer install') + ',', chalk_1.default.cyanBright('\ncopy .env.example .env'), 'and', chalk_1.default.cyanBright('php artisan key:generate'));
        console.log(chalk_1.default.bgBlack('Run Project:'), chalk_1.default.cyanBright('npm run artisan-watch') + '.\n');
    }
    else {
        console.log(chalk_1.default.bgBlack('Install Dependencies:'), chalk_1.default.cyanBright('yarn install') + ',', chalk_1.default.cyanBright('composer install') + ',', chalk_1.default.cyanBright('\ncopy .env.example .env'), 'and', chalk_1.default.cyanBright('php artisan key:generate'));
        console.log(chalk_1.default.bgBlack('Run Project:'), chalk_1.default.cyanBright('npm run artisan-dev') + '.\n');
    }
    console.log(chalk_1.default.bgBlack('Visit:'), chalk_1.default.bold('http://127.0.0.1:8000\n'));
    console.log('Well done 🎉🎉,', chalk_1.default.green('These Boilerplates are created with coffee & passion by', chalk_1.default.green.underline('Joshua Tania'), chalk_1.default.whiteBright('\nFor more info (github): >>'), chalk_1.default.green.underline('https://github.com/Shuashuaa/create-v-kit-spa'), chalk_1.default.whiteBright('\nFor more info (gitlab): >>'), chalk_1.default.green.underline('https://gitlab.com/shuashuaa/create-v-kit-spa\n')));
}
function errorMessage(error) {
    console.error(chalk_1.default.red.inverse(`\n✖ Error creating project. ${error.message}`));
}
