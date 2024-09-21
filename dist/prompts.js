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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectName = getProjectName;
exports.closeReadline = closeReadline;
const readline_1 = require("readline");
const readline = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
function getProjectName() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            readline.question('Enter a project name (using default "v-kit-app" if left blank): ', (answer) => {
                resolve(answer || 'v-kit-app'); // Assign default if answer is empty
            });
        });
    });
}
function closeReadline() {
    readline.close();
}
