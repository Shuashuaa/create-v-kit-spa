#!/usr/bin/env node
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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const yargs_1 = __importDefault(require("yargs"));
const chalk_1 = __importDefault(require("chalk"));
const readline_1 = require("readline");
const readline = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
function copyProjectStructure(sourcePath, destinationPath) {
    return __awaiter(this, void 0, void 0, function* () {
        const entries = yield fs_1.default.promises.readdir(sourcePath, { withFileTypes: true });
        for (const entry of entries) {
            const sourceFile = path_1.default.join(sourcePath, entry.name);
            const destinationFile = path_1.default.join(destinationPath, entry.name);
            if (entry.isDirectory()) {
                yield fs_1.default.promises.mkdir(destinationFile);
                yield copyProjectStructure(sourceFile, destinationFile);
            }
            else {
                yield fs_1.default.promises.copyFile(sourceFile, destinationFile);
            }
        }
    });
}
createProject();
function createProject() {
    return __awaiter(this, void 0, void 0, function* () {
        // Check if a project name is provided through arguments
        const argv = yargs_1.default.argv;
        let projectName = process.argv[2];
        if (!projectName) {
            // Prompt the user for a project name
            projectName = yield new Promise((resolve) => {
                readline.question('Enter a project name (using default "v-kit-app" if left blank): ', (answer) => {
                    resolve(answer || 'v-kit-app'); // Assign default if answer is empty
                });
            });
        }
        // const sourcePath = 'tmp/v-kit';
        const sourcePath = path_1.default.join(__dirname, '../template/v-kit');
        const destinationPath = path_1.default.join(process.cwd(), projectName);
        try {
            yield fs_1.default.promises.mkdir(destinationPath);
            yield copyProjectStructure(sourcePath, destinationPath);
            console.log(chalk_1.default.green('✨ Project created successfully! ✨\n'));
            console.log(chalk_1.default.green('A Boilerplates created with coffee & passion by', chalk_1.default.green.bold.underline('Shuashuaa'), '\nhttps://github.com/Shuashuaa/v-kit\n'));
            console.log(chalk_1.default.bgBlack('> Install Dependencies: '), chalk_1.default.bold.underline('npm install'), 'or', chalk_1.default.bold.underline('yarn install'));
            console.log(chalk_1.default.bgBlack('> Run Project: '), chalk_1.default.bold.underline('npm run dev'), 'or', chalk_1.default.bold.underline('yarn dev'), 'and', chalk_1.default.bold.underline('php artisan serve\n'));
            // console.log(chalk.bgBlack('Woohoo! Bom Bom Bom Bom!, Enjoy! 🎉🎉'));
            readline.close();
        }
        catch (error) {
            console.error(chalk_1.default.red.inverse(`Error creating project: ${error.message}`));
            readline.close();
        }
    });
}
