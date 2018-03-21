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
1. `hashsum-file-checker test.txt md5` - return md5 hash-sum for `test.txt` file.
2. `hashsum-file-checker test.txt` - return all available hash-sums for `test.txt`
