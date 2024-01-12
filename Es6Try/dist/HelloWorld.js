"use strict";

/**
 * Dec.21
 * 创建服务器 
 */

var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, { "Content-type": "text/pain" });
  res.end("Hello, world!");
}).listen(8888);

console.log("启动服务成功");