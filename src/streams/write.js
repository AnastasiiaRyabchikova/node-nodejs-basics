import { createWriteStream } from 'node:fs';
import process from 'node:process';

const write = async () => {
    const writeStream = createWriteStream('./src/streams/files/fileToWrite.txt');
    process.stdin.on('data', data => {
        writeStream.write(data.toString());
    })
};

await write();