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
exports.countItems = countItems;
exports.getCount = getCount;
const fs = require('fs');
const path = require('path');
const progress_1 = require("./progress");
function countItems(dirPath) {
    return __awaiter(this, void 0, void 0, function* () {
        let count = 0;
        const files = yield fs.promises.readdir(dirPath);
        for (const file of files) {
            const filePath = path.join(dirPath, file);
            const stat = yield fs.promises.stat(filePath);
            if (stat.isDirectory()) {
                count += yield countItems(filePath); // Recursive
            }
            else if (stat.isFile()) {
                count++;
            }
        }
        return count;
    });
}
// const sourcePath = path.join(__dirname, '../templates', '158');
function getCount(sourcePath, templatePath) {
    countItems(sourcePath)
        .then((count) => {
        // console.log(`There are ${count} items (files and folders) in the folder.`);
        (0, progress_1.Progress)(count, templatePath);
    })
        .catch((err) => {
        console.error('Error:', err);
    });
}
