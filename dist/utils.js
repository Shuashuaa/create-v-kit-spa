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
exports.copyProjectStructure = copyProjectStructure;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
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
