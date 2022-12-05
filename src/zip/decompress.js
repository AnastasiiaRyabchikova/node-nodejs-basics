import fs from 'node:fs';
import { unzip } from 'node:zlib';
import { promisify } from 'node:util';

const do_unzip = promisify(unzip);

const decompress = async () => {
    const readStream = fs.createReadStream('./src/zip/files/archive.gz');
    const writeStream = fs.createWriteStream('./src/zip/files/fileToCompress.txt');

    readStream.on('data', async (buffer) => {
        const str = await do_unzip(buffer);
        writeStream.write(str);
    });
};

await decompress();