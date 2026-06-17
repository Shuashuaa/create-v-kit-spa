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
exports.TEMPLATES = void 0;
exports.getProjectName = getProjectName;
exports.getTemplateChoice = getTemplateChoice;
exports.detectPhp = detectPhp;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const prompts_1 = require("@clack/prompts");
const { spawn } = require('child_process');
// Single source of truth for the boilerplates. Folder ids map to ./lib/<id>.
exports.TEMPLATES = [
    { id: '158', label: 'Vue2-Laravel8', hint: 'php 7.4' },
    { id: '159', label: 'Vue3-Laravel8', hint: 'php 7.4' },
    { id: '160', label: 'Vue3-Laravel9', hint: 'php 8.0' },
    { id: '161', label: 'Vue3-Laravel10', hint: 'php 8.1' },
    { id: '162', label: 'Vue3-Laravel11', hint: 'php 8.2 - 8.3' },
];
const DEFAULT_NAME = 'v-kit-app';
// Characters that are illegal in Windows paths (and a good ban list elsewhere too).
const INVALID_NAME = /[<>:"/\\|?*\x00-\x1f]/;
function bail(value) {
    if ((0, prompts_1.isCancel)(value)) {
        (0, prompts_1.cancel)('Cancelled.');
        process.exit(0);
    }
}
function getProjectName() {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield (0, prompts_1.text)({
            message: 'Project name',
            placeholder: DEFAULT_NAME,
            defaultValue: DEFAULT_NAME,
            validate(value) {
                const v = (value !== null && value !== void 0 ? value : '').trim();
                if (!v)
                    return; // empty -> default name is used
                if (INVALID_NAME.test(v))
                    return 'Name contains invalid path characters.';
                if (fs_1.default.existsSync(path_1.default.join(process.cwd(), v)))
                    return `Directory "${v}" already exists.`;
            },
        });
        bail(answer);
        return answer.trim() || DEFAULT_NAME;
    });
}
function getTemplateChoice() {
    return __awaiter(this, void 0, void 0, function* () {
        const choice = yield (0, prompts_1.select)({
            message: 'Select your preferred boilerplate',
            options: exports.TEMPLATES.map((t) => ({ value: t.id, label: t.label, hint: t.hint })),
        });
        bail(choice);
        return choice;
    });
}
/**
 * Resolve the installed PHP version, or null if PHP is missing.
 * `shell: true` so the bare name `php` resolves via PATH/PATHEXT on Windows,
 * matching how the interactive shell finds php.exe. Never rejects/throws:
 * a missing binary emits 'error', which we catch and report as null.
 */
function detectPhp() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            let output = '';
            let settled = false;
            const finish = (version) => {
                if (settled)
                    return;
                settled = true;
                resolve(version);
            };
            const phpProcess = spawn('php', ['-v'], { shell: true });
            phpProcess.stdout.on('data', (data) => {
                output += data.toString();
            });
            phpProcess.on('error', () => finish(null));
            phpProcess.on('close', () => {
                const match = output.match(/PHP (\d+\.\d+\.\d+)/);
                finish(match ? `v${match[1]}` : null);
            });
        });
    });
}
