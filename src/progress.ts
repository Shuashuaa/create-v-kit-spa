// returns the countVal as a progress bar

const _progress = require('cli-progress');
const colors = require('ansi-colors');

import { successMessage } from "./messages";

export async function Progress(countVal: number, sourceVal: string){
    console.log('\n');
    const b1 = new _progress.SingleBar({
        format: 'Downloading... |' + colors.cyan('{bar}') + '| {percentage}% | {value}/{total} Files | ETA: {eta}s',
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
        hideCursor: true
    });

    b1.start(countVal, 0);

    let value = 0;

    const timer = setInterval(function(){

        value++;
        
        b1.update(value)

        if (value >= b1.getTotal()){
            clearInterval(timer);
            b1.stop();
            
            successMessage(sourceVal)
        }
    }, 20);
}