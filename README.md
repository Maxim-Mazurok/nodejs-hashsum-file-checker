# NodeJS HashSum File Checker

[<img src="https://img.shields.io/npm/v/nodejs-hashsum-file-checker.svg">](https://www.npmjs.com/package/nodejs-hashsum-file-checker)
[<img src="https://img.shields.io/npm/dt/nodejs-hashsum-file-checker.svg">](https://www.npmjs.com/package/nodejs-hashsum-file-checker)
[<img src="https://img.shields.io/npm/l/nodejs-hashsum-file-checker.svg">](https://github.com/Maxim-Mazurok/nodejs-hashsum-file-checker/blob/master/LICENSE)

## Install
```
npm install -g nodejs-hashsum-file-checker
```
or, if you're getting "Missing write access" error, try adding a `sudo`:
```
sudo npm install -g nodejs-hashsum-file-checker
```

## CLI
```
hashsum-file-checker filePath [algorithm]
```

## Examples
`hashsum-file-checker test.txt md5` - return md5 hash-sum for `test.txt` file.

`hashsum-file-checker test.txt` - return all available hash-sums for `test.txt`
