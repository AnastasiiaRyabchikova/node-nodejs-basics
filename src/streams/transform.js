const transform = async () => {
    process.stdin.on('data', (data) => {
        process.stdout
            .write(data.toString().split('').reverse().join(''));
    })
};

await transform();