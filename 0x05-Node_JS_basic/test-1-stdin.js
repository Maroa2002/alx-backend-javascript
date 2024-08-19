const { spawn } = require('child_process');

// Spawn the child process
const child = spawn('node', ['1-stdin.js']);

// Capture and display the output from the child process
child.stdout.on('data', (data) => {
  console.log(`STDOUT: ${data.toString()}`);
});

// Send input ("Alice") to the child process
child.stdin.write('Alice\n');

// Optionally close the stdin stream to simulate end of input
child.stdin.end();

// Capture the exit code when the child process ends
child.on('close', (code) => {
  console.log(`Child process exited with code ${code}`);
});
