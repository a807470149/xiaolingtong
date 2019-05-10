var mongoose = require('mongoose');

//连接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/xiaolingtong');

// 连接成功
mongoose.connection.on("connected", function () {
  console.log("MongoDB connected success.")
});

// 连接失败
mongoose.connection.on("error", function () {
  console.log("MongoDB connected fail.")
});

// 连接中断
mongoose.connection.on("disconnected", function () {
  console.log("MongoDB connected disconnected.")
});