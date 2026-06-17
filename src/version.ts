import chalk from 'chalk';
const { spawn } = require('child_process');

const phpProcess = spawn('php', ['-v'], { shell: true });

phpProcess.stdout.on('data', (data: { toString: () => string; }) => {
    const match = data.toString().match(/PHP (\d+\.\d+\.\d+)/);
    if (match) {
        console.log('Scanning... your php is:',chalk.greenBright(`v${match[1]}`));
    } else {
        console.error('Could not find Php version');
    }
});

phpProcess.stderr.on('data', (data: any) => {
    console.error(`Php check error: ${data}`);
});

// Spawn failure (binary not found) emits 'error', not stderr.
// Without this, Node throws on the unhandled 'error' event and crashes.
phpProcess.on('error', () => {
    console.error(chalk.redBright('Php not found in PATH.'));
});
