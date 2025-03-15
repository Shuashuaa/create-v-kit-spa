const { spawn } = require('child_process');

const phpProcess = spawn('php', ['-v']);

phpProcess.stdout.on('data', (data) => {
//   console.log(`Checking php version: \n\n${data}`);
    const match = data.toString().match(/PHP (\d+\.\d+\.\d+)/);
    if (match) {
        console.log(`your php version is: v${match[1]}`);
    } else {
        console.error('Could not find Php version');
    }
});

phpProcess.stderr.on('data', (data) => {
  console.error(`Php not found: ${data}`);
});