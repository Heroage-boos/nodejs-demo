// 添加静态文件处理功能

var express = require("express");
var app = express();

//添加静态文件处理功能
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__filename + "/" + "index.html");
});

//get 表单提交参数
app.get("/get_data", function (req, res) {
  //处理上传参数
  var response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };
  //返回处理参数
  res.send(JSON.stringify(response));
});

var server = app.listen("8888", function (req, res) {
  console.log("启动服务成功");
  console.log(server.address());
});
