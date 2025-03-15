import chalk from 'chalk';
const { spawn } = require('child_process');

const phpProcess = spawn('php', ['-v']);

phpProcess.stdout.on('data', (data: { toString: () => string; }) => {
    const match = data.toString().match(/PHP (\d+\.\d+\.\d+)/);
    if (match) {
        console.log('Scanning... your php is:',chalk.greenBright(`v${match[1]}`));
    } else {
        console.error('Could not find Php version');
    }
});

phpProcess.stderr.on('data', (data: any) => {
    console.error(`Php not found: ${data}`);
});
