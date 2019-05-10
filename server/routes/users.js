var express = require('express');
var router = express.Router();
var users = require("../models/users");
const shopCar = require("../models/shopCar")

// 注册功能
router.post('/register', function (req, res, next) {
  const [phone, password] = [req.body.phone, req.body.password]
  users.find({ id: phone }, (err, doc) => {
    if (err) {
      res.json({
        status: "-1",
        msg: err.message
      });
    } else {
      if (doc.length !== 0) {
        res.send({
          status: -1,
          message: '账号已存在'
        })
      } else {
        const user = new users({
          id: phone,
          password: password
        })
        user.save((err, data) => {
          if (err) {
            console.error(err)
          } else {
            res.send({
              status: 0,
              message: '注册成功'
            })
          }
        })
      }
    }
  })
});

// 登陆功能
router.post("/login", function (req, res, next) {
  const [phone, password] = [req.body.phone, req.body.password]
  users.find({ id: phone, password: password }, (err, doc) => {
    if (err) {
      res.json({
        status: -1,
        msg: err.message
      });
    } else {
      if (doc.length === 0) {
        res.send({
          status: -1,
          message: '账号不存在'
        })
      } else {
        res.send({
          status: 0,
          message: '账号存在'
        })
      }
    }
  })
})

// 获取购物车信息
router.post("/getShopCar", function (req, res, next) {
  const userPhone = req.body.user;
  shopCar.find({ userid: userPhone }, (err, doc) => {
    if (err) {
      console.error(err)
    } else {

      if (doc.length !== 0) {
        res.send({
          status: 0,
          message: doc,
        })
      } else {
        console.info('not')
      }
    }
  })
})

// 添加购物车
router.post("/addCar", function (req, res, next) {
  const goods = req.body.goods;
  
    shopCar.create(goods,(err, doc) => {
      if(err) {
        console.error(err)
      } else {
        console.log(doc);
      }
    })

})

module.exports = router;
