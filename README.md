# Node
# 学习手记
  1. 输入命令：node  进入交互模式，输入一行解释一行。
          node + XX.js 进入解释模式

  2. Node提供的 require() 用于导入模块，相对位置
        模块名 = 文件名 - 后缀(.js)
        module.exports = ...  导出

  3. CommonJS规范
      每个.js文件都是一个模块，它们内部各自使用的变量名和函数名都互不冲突。

  4. Node.js 会在后台将每一个js文件/模块，包装为一个 
      (function() {
        // 模块代码
        ...
      })();

  5. module.exports 与 exports 的区别：
      如果要输出一个键值对象{}，可以利用exports这个已存在的空对象{}，并继续在上面添加新的键值；
      如果要输出一个函数或数组，必须直接对module.exports对象赋值。

  6. 因为Node.js是运行在服务区端的JavaScript环境，服务器程序和浏览器程序相比，最大的特点是没有浏览器的安全限制了，
     而且，服务器程序必须能接收网络请求，读写文件，处理二进制内容，所以，Node.js内置的常用模块就是为了实现基本的服务器功能

  7. JavaScript 的全局对象。 可以据此判断javascript当前执行环境
      浏览器： window
      Node： global

  8. process 是 Node 事件进程对象
  9. process.nextTick() 在下一次事件响应中执行

  10. Node.js内置的fs模块就是文件系统模块，负责读写文件。
      和所有其它JavaScript模块不同的是，fs模块同时提供了异步和同步的方法。
  
  11. fs 的方法
      异步读取文件： fs.readFile()
      同步读取文件： fs.readFileSync()
      异步写入文件： fs.writeFile()
      同步写入文件： fs.writeFileSync()
      异步获取文件信息： fs.stat()
      同步获取文件信息： fs.statSync()

  12. stream是Node.js提供的又一个仅在服务区端可用的模块，目的是支持“流”这种数据结构。
      流的特点是数据是有序的，而且必须依次读取，或者依次写入，不能像Array那样随机定位。

  13. fs.createReadStream()  创建读取流
          on('data', callback())
          on('end', callback())
          on('err', callback())

      fs.createWriteStream()  创建写入流
          write()
          end()

  14. pipe() 将读取流文件内容复制到写入流文件内


  15. Node.js自带的http模块 
      request对象封装了HTTP请求，我们调用request对象的属性和方法就可以拿到所有HTTP请求的信息；
      response对象封装了HTTP响应，我们操作response对象的方法，就可以把HTTP响应返回给浏览器。




















