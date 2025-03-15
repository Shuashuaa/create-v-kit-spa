const _progress = require('cli-progress');
const colors = require('ansi-colors');

export async function Progress(){
    console.log('\n');
    const b1 = new _progress.SingleBar({
        format: 'Downloading... |' + colors.cyan('{bar}') + '| {percentage}% | {value}/{total} Files | ETA: {eta}s',
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
        hideCursor: true
    });

    const templateName = 'sample template'

    b1.start(50, 0);

    let value = 0;

    const timer = setInterval(function(){

        value++;
        
        b1.update(value)

        if (value >= b1.getTotal()){
            clearInterval(timer);
            b1.stop();

            const successMessage = ' ' + colors.green('✔ ') + `${templateName}` + ' is successfully downloaded.';
            console.log(successMessage)
        }
    }, 20);
}

Progress();