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
exports.fileNameVariable = void 0;
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
exports.fileNameVariable = '';
function getProjectName() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            // readline.question('? Enter a project name (using default "v-kit-app" if left blank): ', (answer) => {
            //   resolve(answer || 'v-kit-app');
            // });
            let message = `\n${chalk_1.default.bold.cyan('?')} ${chalk_1.default.bold('Enter a project name')} (using default "${chalk_1.default.bold.magentaBright('v-kit-app')}" if left blank): `;
            readline.question(message, (answer) => {
                exports.fileNameVariable = answer ? answer : 'v-kit-spa';
                resolve(answer || 'v-kit-app');
            });
        });
    });
}
function getBoilerplateChoice() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
            // Scan php version. Wait for the process to finish (or fail) before prompting.
            // `shell: true` so the bare name `php` resolves via PATH/PATHEXT on Windows,
            // matching how the interactive shell finds php.exe.
            yield new Promise((resolvePhp) => {
                let settled = false;
                const done = () => {
                    if (settled)
                        return;
                    settled = true;
                    resolvePhp();
                };
                const phpProcess = spawn('php', ['-v'], { shell: true });
                phpProcess.stdout.on('data', (data) => {
                    const match = data.toString().match(/PHP (\d+\.\d+\.\d+)/);
                    if (match) {
                        console.log(chalk_1.default.italic('Scanning... your php is:'), chalk_1.default.greenBright(`v${match[1]}`));
                    }
                });
                phpProcess.stderr.on('data', (data) => {
                    console.error(chalk_1.default.redBright(`Php check error: ${data}`));
                });
                // Spawn failure (binary not found) emits 'error', NOT stderr.
                // Without this handler Node throws on the unhandled 'error' event and crashes.
                phpProcess.on('error', () => {
                    console.log(chalk_1.default.redBright('Php not found in PATH. Skipping version scan; you can still pick a boilerplate.'));
                    done();
                });
                // Resolve once the process exits so a missing/quiet php can't hang the prompt.
                phpProcess.on('close', () => done());
            });
            //! This will not run before the function above 'resolve'
            let message = `\n${chalk_1.default.bold.cyan('?')} ${chalk_1.default.bold('Select your preferred boilerplate:')}\n`;
            message += `[1] - ${chalk_1.default.underline('Vue2-Laravel8')} ${chalk_1.default.grey.italic('~ php v7.4')}\n`;
            message += `[2] - ${chalk_1.default.underline('Vue3-Laravel8')} ${chalk_1.default.grey.italic('~ php v7.4')}\n`;
            message += `[3] - ${chalk_1.default.underline('Vue3-Laravel9')} ${chalk_1.default.grey.italic('~ php v8.0')}\n`;
            message += `[4] - ${chalk_1.default.underline('Vue3-Laravel10')} ${chalk_1.default.grey.italic('~ php v8.1')}\n`;
            message += `[5] - ${chalk_1.default.underline('Vue3-Laravel11')} ${chalk_1.default.grey.italic('~ php v8.2 - v8.3')}\n`;
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
