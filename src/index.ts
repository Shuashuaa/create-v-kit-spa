#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import yargs from 'yargs';
import chalk from 'chalk';
import { createInterface } from 'readline';

const readline = createInterface({
  input: process.stdin,
  output: process.stdout
});

async function copyProjectStructure(sourcePath: any, destinationPath: string) {
  const entries = await fs.promises.readdir(sourcePath, { withFileTypes: true });

  for (const entry of entries) {
    const sourceFile = path.join(sourcePath, entry.name);
    const destinationFile = path.join(destinationPath, entry.name);

    if (entry.isDirectory()) {
      await fs.promises.mkdir(destinationFile);
      await copyProjectStructure(sourceFile, destinationFile);
    } else {
      await fs.promises.copyFile(sourceFile, destinationFile);
    }
  }
}

createProject();

async function createProject() {
  // Check if a project name is provided through arguments
  const argv = yargs.argv;
  let projectName = process.argv[2];

  if (!projectName) {
    // Prompt the user for a project name
    projectName = await new Promise((resolve) => {
      readline.question('Enter a project name (using default "v-kit-app" if left blank): ', (answer) => {
        resolve(answer || 'v-kit-app'); // Assign default if answer is empty
      });
    });
  }

  // const sourcePath = 'tmp/v-kit';
  const sourcePath = path.join(__dirname, 'template/v-kit')
  const destinationPath = path.join(process.cwd(), projectName);

  try {
    await fs.promises.mkdir(destinationPath);
    await copyProjectStructure(sourcePath, destinationPath);
    console.log(chalk.green('✨ Project created successfully! ✨\n'));
    // console.log(chalk.yellow('     /\_/\ \n    ( o.o )\n     >^<\n'));
    
    console.log(chalk.yellow("              *       +"));
    console.log(chalk.yellow("        '                  |"));
    console.log(chalk.yellow("    ()    .-.,='``'=.    - o -"));
    console.log(chalk.yellow("          '=/_       \\     |"));
    console.log(chalk.yellow("       *   |  '=._    |"));
    console.log(chalk.yellow("           \\      `=../`,        '"));
    console.log(chalk.yellow("         .   '=.__.=' `='      *"));
    console.log(chalk.yellow("+                         +"));
    console.log(chalk.yellow("     O      *        '       .\n"));
    
    // console.log(chalk.yellow("              *       +"));
    // console.log(chalk.yellow("        '                  |"));
    // console.log(chalk.yellow("    ()    .-.,='``'=.    - o -"));
    // console.log(chalk.yellow("          '=/_       \\     |"));
    // console.log(chalk.yellow("       *   |  '=._    |"));
    // console.log(chalk.yellow("           \\      `=../`,        '     ╱|\\\\"));
    // console.log(chalk.yellow("         .   '=.__.=' `='      *      (˚ˎ。7  "));
    // console.log(chalk.yellow("+                         +           |、˜〵  "));
    // console.log(chalk.yellow("     O      *        '       .        じしˍ,)ノ\n"));
    // console.log(chalk.yellow("                 ╱|\\\\\n                (˚ˎ。7  \n                |、˜〵          \n                じしˍ,)ノ\n"));
    
    //                  *       +
    //            '                  |
    //        ()    .-.,="``"=.    - o -
    //              '=/_       \     |
    //           *   |  '=._    |
    //                \     `=./`,        '
    //             .   '=.__.=' `='      *
    //    +                         +
    //         o      *        '       .

    console.log(chalk.green('A Boilerplates created with coffee & passion by', chalk.green.bold.underline('Shuashuaa'), '\nhttps://github.com/Shuashuaa/v-kit\n'));

    console.log(chalk.bgBlack('> Install Dependencies: '), chalk.bold.underline('npm install') , 'or' , chalk.bold.underline('yarn install'));
    console.log(chalk.bgBlack('> Run Project: '), chalk.bold.underline('npm run dev') , 'or' , chalk.bold.underline('yarn dev') , 'and' , chalk.bold.underline('php artisan serve\n'));

    // console.log(chalk.bgBlack('Woohoo! Bom Bom Bom Bom!, Enjoy! 🎉🎉'));
    
    readline.close();

  } catch (error: any) {
    console.error(chalk.red.inverse(`Error creating project: ${error.message}`));
    readline.close();

  }
}