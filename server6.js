// restFul API的接口

var express = require("express");
var app = express();
var fs = require("fs");

var user = {
  user4: {
    name: "mohit",
    password: "password4",
    profession: "teacher",
    id: 4,
  },
};

app.get("/restful_get", function (req, res) {
  fs.readFile(__dirname + "/" + "users.json", "utf-8", function (err, data) {
    if (err) {
      console.log("restful-err", err);
    } else {
      res.send(data);
    }
  });
});

app.get("/:id", function (req, res) {
  fs.readFile(__dirname + "/" + "users.json", "utf-8", function (err, data) {
    data = JSON.parse(data);
    //处理数据格式
    var user = data["user" + req.params.id];
    //返回参数
    res.send(user);
  });
});

app.get("/addUser", function (req, res) {
  fs.readFile(__dirname + "/" + "users.json", "utf-8", function (err, data) {
    data = JSON.parse(data);
    data["user4"] = user["user4"];
    res.send(data);
  });
});

app.get("/deleteUser", function (req, res) {
  fs.readFile(__dirname + "/" + "users.json", "utf-8", function (err, data) {
    data = JSON.parse(data);
    delete data["user" + 2];
    console.log("delete_data", data);
    res.send(JSON.stringify(data));
  });
});

var server = app.listen("3000", function (req, res) {
  try {
    console.log("开启服务器成功!");
    console.log("server--address", server.address());
  } catch (error) {
    console.log("开启服务器失败!", error);
  }
});
