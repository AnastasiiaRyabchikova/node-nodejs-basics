import fs from 'node:fs';
import zlib from 'node:zlib';

const compress = async () => {
    const readStream = fs.createReadStream('./src/zip/files/fileToCompress.txt');
    const writeStream = fs.createWriteStream('./src/zip/files/archive.gz');
    const compressStream = zlib.createGzip();

    readStream
        .pipe(compressStream)
        .pipe( writeStream);
};

await compress();