// 基本的路由

var express=require('express')
var app=express()


//获取get请求
app.get("/",function(req,res){
    //返回参数
    res.send("这是返回的参数")
})

app.get("/data1",function(req,res){
    //返回参数
    res.send({
        message:"success",
        data:"null"
    })
})


var server=app.listen("8888",function(req,res){
    console.log("服务器启动成功");
    console.log(server.address());
    // console.log("服务器启动成功",server.address()+""+server.address().port)
    console.log("listen-req",req+'\n'+"listen-res",res)
})



