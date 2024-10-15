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
exports.getProjectName = getProjectName;
exports.getBoilerplateChoice = getBoilerplateChoice;
exports.closeReadline = closeReadline;
const chalk_1 = __importDefault(require("chalk"));
const { spawn } = require('child_process');
const readline_1 = require("readline");
const readline = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
function getProjectName() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            // readline.question('? Enter a project name (using default "v-kit-app" if left blank): ', (answer) => {
            //   resolve(answer || 'v-kit-app');
            // });
            let message = `\n${chalk_1.default.bold.cyan('?')} ${chalk_1.default.bold('Enter a project name')} (using default "${chalk_1.default.bold.magentaBright('v-kit-app')}" if left blank): `;
            readline.question(message, (answer) => {
                resolve(answer || 'v-kit-app');
            });
        });
    });
}
function getBoilerplateChoice() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            //!
            const phpProcess = spawn('php', ['-v']);
            let version = null;
            phpProcess.stdout.on('data', (data) => {
                const match = data.toString().match(/PHP (\d+\.\d+\.\d+)/);
                if (match) {
                    version = `v${match[1]}`;
                    console.log(chalk_1.default.italic('Scanning... your php is:'), chalk_1.default.greenBright(version));
                }
                else {
                    console.log(chalk_1.default.redBright(`Php is not installed in your machine`));
                }
            });
            phpProcess.stderr.on('data', (data) => {
                console.error(`Php not found: ${data}`);
            });
            //!!
            yield new Promise((resolve) => {
                phpProcess.stdout.once('data', () => resolve());
            });
            //! This will not run before the function above 'resolve'
            let message = `\n${chalk_1.default.bold.cyan('?')} ${chalk_1.default.bold('Select your preferred boilerplate:')}\n`;
            message += `[1] - ${chalk_1.default.underline('Vue2-Laravel8')} ${chalk_1.default.grey.italic('~ php v7.4')}\n`;
            message += `[2] - ${chalk_1.default.underline('Vue3-Laravel8')} ${chalk_1.default.grey.italic('~ php v7.4')}\n`;
            message += `[3] - ${chalk_1.default.underline('Vue3-Laravel9')} ${chalk_1.default.grey.italic('~ php v8.0')}\n`;
            message += `[4] - ${chalk_1.default.underline('Vue3-Laravel10')} ${chalk_1.default.grey.italic('~ php v8.1')}\n`;
            message += `[5] - ${chalk_1.default.underline('Vue3-Laravel11')} ${chalk_1.default.grey.italic('~ php v8.2')}\n`;
            message += '=> ';
            readline.question(message, (answer) => __awaiter(this, void 0, void 0, function* () {
                resolve(parseInt(answer));
            }));
        }));
    });
}
function closeReadline() {
    readline.close();
}
