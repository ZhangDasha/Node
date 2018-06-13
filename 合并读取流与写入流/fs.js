'use strict';

var fs = require('fs');

var rs = fs.createReadStream('input.txt', 'utf-8');
var ws = fs.createWriteStream('output.txt', 'utf-8');

// 将input.txt的文件自动写入到 output.txt
rs.pipe(ws);