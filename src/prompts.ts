import chalk from 'chalk';
const { spawn } = require('child_process');
import { createInterface } from 'readline';

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
});

export let fileNameVariable = '';

export   
 async function getProjectName(): Promise<string> {
  return new Promise((resolve) => {
    // readline.question('? Enter a project name (using default "v-kit-app" if left blank): ', (answer) => {
    //   resolve(answer || 'v-kit-app');
    // });
    let message = `\n${chalk.bold.cyan('?')} ${chalk.bold('Enter a project name')} (using default "${chalk.bold.magentaBright('v-kit-app')}" if left blank): `;

    readline.question(message, (answer) => {
      fileNameVariable = answer ? answer : 'v-kit-spa';
      resolve(answer || 'v-kit-app');
    })
  });
}

export async function getBoilerplateChoice(): Promise<number> {
  return new Promise(async (resolve) => {

    // Scan php version. Wait for the process to finish (or fail) before prompting.
    // `shell: true` so the bare name `php` resolves via PATH/PATHEXT on Windows,
    // matching how the interactive shell finds php.exe.
    await new Promise<void>((resolvePhp) => {
      let settled = false;
      const done = () => {
        if (settled) return;
        settled = true;
        resolvePhp();
      };

      const phpProcess = spawn('php', ['-v'], { shell: true });

      phpProcess.stdout.on('data', (data: { toString: () => string; }) => {
        const match = data.toString().match(/PHP (\d+\.\d+\.\d+)/);
        if (match) {
          console.log(chalk.italic('Scanning... your php is:'), chalk.greenBright(`v${match[1]}`));
        }
      });

      phpProcess.stderr.on('data', (data: any) => {
        console.error(chalk.redBright(`Php check error: ${data}`));
      });

      // Spawn failure (binary not found) emits 'error', NOT stderr.
      // Without this handler Node throws on the unhandled 'error' event and crashes.
      phpProcess.on('error', () => {
        console.log(chalk.redBright('Php not found in PATH. Skipping version scan; you can still pick a boilerplate.'));
        done();
      });

      // Resolve once the process exits so a missing/quiet php can't hang the prompt.
      phpProcess.on('close', () => done());
    });

    //! This will not run before the function above 'resolve'
    let message = `\n${chalk.bold.cyan('?')} ${chalk.bold('Select your preferred boilerplate:')}\n`;
    message += `[1] - ${chalk.underline('Vue2-Laravel8')} ${chalk.grey.italic('~ php v7.4')}\n`
    message += `[2] - ${chalk.underline('Vue3-Laravel8')} ${chalk.grey.italic('~ php v7.4')}\n`;
    message += `[3] - ${chalk.underline('Vue3-Laravel9')} ${chalk.grey.italic('~ php v8.0')}\n`;
    message += `[4] - ${chalk.underline('Vue3-Laravel10')} ${chalk.grey.italic('~ php v8.1')}\n`;
    message += `[5] - ${chalk.underline('Vue3-Laravel11')} ${chalk.grey.italic('~ php v8.2 - v8.3')}\n`;
    message += '=> ';

    readline.question(message, async (answer) => {
      resolve(parseInt(answer));
    });
  });
}


export function closeReadline() {
  readline.close();
}