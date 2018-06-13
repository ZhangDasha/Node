'use strict';

var fs = require('fs');

// 使用try...catch处理同步读取中的错误
try{
  var data = fs.readFileSync('file.txt', 'utf-8');
  console.log(data);
} catch(err) {
  console.log(err);
}