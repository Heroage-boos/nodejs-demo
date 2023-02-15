// 添加静态文件处理功能

var express = require("express");
var app = express();

//处理post参数
var bodyParser=require("body-parser")
var urlencodedParser=bodyParser.urlencoded({extended:false})
//处理post参数

//添加静态文件处理功能
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname, "index.html");
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

//post 表单提交参数
app.post("/post_data",urlencodedParser, function (req ,res) {
  //处理上传参数
  console.log("post_req", req);
  var response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };
  //返回数据
  res.send(response);
});

var server = app.listen("8888", function (req, res) {
  console.log("启动服务成功");
  console.log(server.address());
});
