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
exports.Progress = Progress;
const _progress = require('cli-progress');
const colors = require('ansi-colors');
const messages_1 = require("./messages");
function Progress(countVal, sourceVal) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('\n');
        const b1 = new _progress.SingleBar({
            format: 'Downloading... |' + colors.cyan('{bar}') + '| {percentage}% | {value}/{total} Files | ETA: {eta}s',
            barCompleteChar: '\u2588',
            barIncompleteChar: '\u2591',
            hideCursor: true
        });
        b1.start(countVal, 0);
        let value = 0;
        const timer = setInterval(function () {
            value++;
            b1.update(value);
            if (value >= b1.getTotal()) {
                clearInterval(timer);
                b1.stop();
                (0, messages_1.successMessage)(sourceVal);
            }
        }, 20);
    });
}
