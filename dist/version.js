"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const { spawn } = require('child_process');
const phpProcess = spawn('php', ['-v']);
phpProcess.stdout.on('data', (data) => {
    const match = data.toString().match(/PHP (\d+\.\d+\.\d+)/);
    if (match) {
        console.log('Scanning... your php is:', chalk_1.default.greenBright(`v${match[1]}`));
    }
    else {
        console.error('Could not find Php version');
    }
});
phpProcess.stderr.on('data', (data) => {
    console.error(`Php not found: ${data}`);
});
