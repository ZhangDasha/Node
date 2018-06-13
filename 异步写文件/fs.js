'use strict';

var fs = require('fs');

var data = '这是写入的内容';

fs.writeFile('output.txt', data, 'utf-8', function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('ok');
  }
});