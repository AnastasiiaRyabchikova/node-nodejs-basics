import { createHash } from 'node:crypto'

const calculateHash = async () => {
    console.log(createHash('sha256')
        .update('./src/hash/files/fileToCalculateHashFor.txt')
        .digest('hex'));
};

await calculateHash();