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
const readline_1 = require("readline");
const readline = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
function getProjectName() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            // readline.question('? Enter a project name (using default "v-kit-app" if left blank): ', (answer) => {
            //   resolve(answer || 'v-kit-app');
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
        return new Promise((resolve) => {
            let message = `\n${chalk_1.default.bold.cyan('?')} ${chalk_1.default.bold('Select your preferred boilerplate:')}\n`;
            // message += `\nMonoRepo:\n`;                         
            // Decoupled:\n`;
            message += `\n[1] - ${chalk_1.default.bold.underline('Vue2-Laravel8')}\n`;
            // [6] - ${chalk.bold.underline.gray('Vue2-Laravel8')} ${chalk.gray.dim.italic('(on-going..)')};
            message += `[2] - ${chalk_1.default.bold.underline('Vue3-Laravel8')}\n`;
            // [7] - ${chalk.bold.underline.gray('Vue3-Laravel8')} ${chalk.gray.dim.italic('(on-going..)')}\n`; 
            message += `[3] - ${chalk_1.default.bold.underline('Vue3-Laravel9')}\n`;
            // [8] - ${chalk.bold.underline.gray('Vue3-Laravel9')} ${chalk.gray.dim.italic('(on-going..)')}\n`;
            message += `[4] - ${chalk_1.default.bold.underline('Vue3-Laravel10')}\n`;
            message += `[5] - ${chalk_1.default.bold.underline('Vue3-Laravel11')}\n`;
            message += '=> ';
            readline.question(message, (answer) => {
                resolve(parseInt(answer));
            });
        });
    });
}
function closeReadline() {
    readline.close();
}
