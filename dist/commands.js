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
const chalk_1 = __importDefault(require("chalk"));
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const prompts_1 = require("@clack/prompts");
const utils_1 = require("./utils");
const prompts_2 = require("./prompts");
const messages_1 = require("./messages");
function createProject() {
    return __awaiter(this, void 0, void 0, function* () {
        const argv = yield (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
            .scriptName('create-v-kit-spa')
            .option('template', {
            alias: 't',
            type: 'string',
            describe: `Boilerplate id (${prompts_2.TEMPLATES.map((t) => t.id).join(', ')}) — skips the prompt`,
        })
            .help()
            .parse();
        (0, prompts_1.intro)(chalk_1.default.bgCyan.black(' create-v-kit-spa '));
        // Project name: positional arg wins, otherwise prompt.
        const projectName = argv._[0] ? String(argv._[0]) : yield (0, prompts_2.getProjectName)();
        const destinationPath = path_1.default.join(process.cwd(), projectName);
        if (fs_1.default.existsSync(destinationPath)) {
            (0, messages_1.errorMessage)(new Error(`The directory "${projectName}" already exists.`));
            process.exit(1);
        }
        // Scan PHP (informational — boilerplates still install without it locally).
        const phpSpinner = (0, prompts_1.spinner)();
        phpSpinner.start('Scanning php');
        const phpVersion = yield (0, prompts_2.detectPhp)();
        phpSpinner.stop(phpVersion
            ? `php ${phpVersion} detected`
            : 'php not found in PATH — install it before running the project');
        // Template: --template flag wins (validated), otherwise prompt.
        let templateId = argv.template;
        if (templateId && !prompts_2.TEMPLATES.some((t) => t.id === templateId)) {
            (0, messages_1.errorMessage)(new Error(`Invalid template "${templateId}". Valid ids: ${prompts_2.TEMPLATES.map((t) => t.id).join(', ')}`));
            process.exit(1);
        }
        if (!templateId)
            templateId = yield (0, prompts_2.getTemplateChoice)();
        const template = prompts_2.TEMPLATES.find((t) => t.id === templateId);
        const sourcePath = path_1.default.join(__dirname, '../lib', template.id);
        const copySpinner = (0, prompts_1.spinner)();
        copySpinner.start(`Creating ${template.label} project`);
        try {
            yield fs_1.default.promises.mkdir(destinationPath);
            yield (0, utils_1.copyProjectStructure)(sourcePath, destinationPath);
            copySpinner.stop(`Created ${chalk_1.default.cyan(projectName)} (${template.label})`);
        }
        catch (error) {
            copySpinner.stop('Failed to create project');
            (0, messages_1.errorMessage)(error);
            process.exit(1);
        }
        (0, prompts_1.outro)(chalk_1.default.green(`${template.label} boilerplate ready 🎉`));
        (0, messages_1.successMessage)(template.id, projectName);
    });
}
createProject().catch((error) => {
    var _a;
    prompts_1.log.error((_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : String(error));
    process.exit(1);
});
