'use strict';

var s = 'Hello';

function greet(name) {
  console.log(s +' '+ name);
}

function fn() {
  console.log('Come on')
}

// 导出 greet 函数
module.exports = {
  Greet: greet,
  Fn: fn
};
