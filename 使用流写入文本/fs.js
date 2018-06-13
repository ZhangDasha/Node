'use strict';

var fs = require('fs');

var rs = fs.createWriteStream('output.txt', 'utf-8');

rs.write('这是流写入的文本...\n');
rs.write('END');

rs.end();