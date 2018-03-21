#! /usr/bin/env node

const crypto = require('crypto');
const fs = require('fs');

if (process.argv.length < 3) {
    console.error('Please, provide a file path to check');
    process.exit(1);
}
const filePath = process.argv[2];
if (fs.existsSync(filePath) === false) {
    console.error(`File ${filePath} doesn't exist`);
    process.exit(1);
}

const algorithm = process.argv.length >= 4 ? process.argv[3] : 'all';

let hashes = crypto.getHashes();
if (algorithm !== 'all') {
    if (hashes.indexOf(algorithm) === -1) {
        console.error('Unknown algorithm');
        process.exit(1);
    } else {
        hashes = [algorithm];
    }
}
hashes = hashes.filter(hash => !hash.match(/^.+WithRSAEncryption$/));
hashes = hashes.map(hash => new Object({
    name: hash,
    object: crypto.createHash(hash)
}));

const input = fs.createReadStream(filePath);

input.on('readable', () => {
    const data = input.read();
    if (data) {
        hashes.forEach(hash => hash.object.update(data));
    } else {
        hashes.forEach(hash => console.log(`${hash.name} ${hash.object.digest('hex')}`));
    }
});
