'use strict';

var fs = require('fs');

var data = "这是同步写入的内容";

fs.writeFileSync('output.txt', data, 'utf-8');