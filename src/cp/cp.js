import child_process from 'node:child_process';
import process from 'node:process';

const spawnChildProcess = async (args) => {
    const cp = child_process.spawn('node', ['./src/cp/files/script.js', ...args]);

    process.stdin.pipe(cp.stdin) 
    cp.stdout.pipe(process.stdout)
};

spawnChildProcess(['--arg1', '--arg2']);