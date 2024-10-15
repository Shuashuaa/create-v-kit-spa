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
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const utils_1 = require("./utils");
const prompts_1 = require("./prompts");
const messages_1 = require("./messages");
const count_1 = require("./count");
const yargs_1 = __importDefault(require("yargs"));
function createProject() {
    return __awaiter(this, void 0, void 0, function* () {
        const argv = yargs_1.default.argv;
        let projectName = process.argv[2];
        if (!projectName) {
            projectName = yield (0, prompts_1.getProjectName)();
        }
        const boilerplateChoice = yield (0, prompts_1.getBoilerplateChoice)();
        const templatePath = getTemplatePath(boilerplateChoice);
        if (!templatePath) {
            (0, messages_1.errorMessage)(new Error('\n✖ Invalid boilerplate choice.'));
            (0, prompts_1.closeReadline)();
            return;
        }
        const sourcePath = path_1.default.join(__dirname, '../lib', templatePath);
        const destinationPath = path_1.default.join(process.cwd(), projectName);
        try {
            yield fs_1.default.promises.mkdir(destinationPath);
            yield (0, utils_1.copyProjectStructure)(sourcePath, destinationPath);
            (0, count_1.getCount)(sourcePath, templatePath);
        }
        catch (error) {
            (0, messages_1.errorMessage)(error);
        }
        finally {
            (0, prompts_1.closeReadline)();
        }
    });
}
function getTemplatePath(boilerplateChoice) {
    switch (boilerplateChoice) {
        case 1:
            return '158';
        case 2:
            return '159';
        case 3:
            return '160';
        case 4:
            return '161';
        case 5:
            return '162';
        default:
            return null;
    }
}
createProject();
