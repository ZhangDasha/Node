'use strict';

var fs = require('fs');

/*
  当读取二进制文件时，不传入文件编码时，回调函数的data参数将返回一个Buffer对象。
  在Node.js中，Buffer对象就是一个包含零个或任意个字节的数组
*/
fs.readFile('file.txt', 'utf-8', function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});