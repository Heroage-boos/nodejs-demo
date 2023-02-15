// cookies管理
var express = require("express");
var cookieParser=require("cookie-parser")
var app = express();

//处理文件上传
var fs = require("fs");

//处理post参数开始
var bodyParser = require("body-parser"); //这是一个Node.js中间件处理JSON，Raw，文本和URL编码的表单数据
//处理文件上传
var multer = require("multer"); //这是一个Node.js的中间件处理multipart/form-data
//处理post参数结束

//添加静态文件处理功能
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: "/attachment/" }).single("file"));

app.use(cookieParser())

app.get("/", function (req, res) {
  res.sendFile(__dirname, "index.html");
});

//读cookie
app.get("/cookie", function (req, res) {
  //打印客户端发送来的cookie 没有{}
  console.log("Cookies: ", req.cookies)
});

//get 表单提交参数
app.get("/get_data", function (req, res) {
  //处理上传参数
  var response = {
    first_name: req.query.fist_name,
    last_name: req.query.lastr_name,
  };
  //返回处理参数
  res.send(JSON.stringify(response));
});

//post 表单提交参数
app.post("/post_data", function (req, res) {
  //处理上传参数
  console.log("post_req", req);
  var response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
  };
  //返回数据
  res.send(response);
});

//文件上传
app.post("/file_upload", function (req, res) {
  console.log("req_files_file", req);
  var file = __filename + "/" + req.files.file.name;
  fs.readFile(req.files.file.path, function (err, data) {
    fs.writeFile(file, data, function (err) {
      if (err) {
        console.log("file_upload_error", file);
      } else {
        response = {
          message: "file upload success",
          filename: req.files.file.name,
        };
      }
      console.log("file_response", response);
      res.end(JSON.stringify(response));
    });
  });
});

var server = app.listen("8888", function (req, res) {
  console.log("启动服务成功");
  console.log(server.address());
});
