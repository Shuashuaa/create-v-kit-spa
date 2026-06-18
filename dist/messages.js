"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.successMessage = successMessage;
exports.errorMessage = errorMessage;
const chalk_1 = __importDefault(require("chalk"));
const prompts_1 = require("@clack/prompts");
const prompts_2 = require("./prompts");
// Templates whose install hint uses npm; the rest use yarn.
const NPM_TEMPLATES = ['158', '159'];
function successMessage(sourceVal, projectName) {
    var _a, _b;
    const label = (_b = (_a = prompts_2.TEMPLATES.find((t) => t.id === sourceVal)) === null || _a === void 0 ? void 0 : _a.label) !== null && _b !== void 0 ? _b : sourceVal;
    const isNpm = NPM_TEMPLATES.includes(sourceVal);
    const installCmd = isNpm ? 'npm install' : 'yarn install';
    const runCmd = isNpm ? 'npm run artisan-watch' : 'npm run artisan-dev';
    console.log(chalk_1.default.green(`\n✔  ${label} boilerplate downloaded\n`));
    // Signature art — created with coffee & passion.
    console.log(chalk_1.default.yellow.bold("              *       ˜"));
    console.log(chalk_1.default.cyan.bold("        ˜                  |"));
    console.log(chalk_1.default.red.bold("    ()    .-.,='``'=.    - o -"));
    console.log(chalk_1.default.yellow.bold("          '=/_       〵    |"));
    console.log(chalk_1.default.cyanBright.bold("       *   |  '=._     )"));
    console.log(chalk_1.default.yellow.bold("           \\      `=../`,        '"));
    console.log(chalk_1.default.redBright.bold("         .   '=.__.=' `='      *"));
    console.log(chalk_1.default.yellow.bold("˜                         +"));
    console.log(chalk_1.default.cyanBright.bold("     O      *        '       .\n"));
    const steps = [
        `cd ${projectName}`,
        installCmd,
        'composer install',
        'copy .env.example .env',
        'php artisan key:generate',
        runCmd,
    ]
        .map((cmd, i) => `${chalk_1.default.dim(`${i + 1}.`)} ${chalk_1.default.cyan(cmd)}`)
        .join('\n');
    (0, prompts_1.note)(steps, 'Next steps');
    console.log(chalk_1.default.dim('   built with coffee & passion by ') + chalk_1.default.green.underline('Joshua Tania'));
    console.log(chalk_1.default.dim('   github.com/Shuashuaa/create-v-kit-spa') +
        chalk_1.default.dim(' · ') +
        chalk_1.default.dim('gitlab.com/shuashuaa/create-v-kit-spa') +
        '\n');
}
function errorMessage(error) {
    console.error(chalk_1.default.red.inverse(`\n✖ Error creating project. ${error.message}`));
}
