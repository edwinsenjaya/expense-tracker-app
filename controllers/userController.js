const { User, Transaction } = require("../models");
const session = require("express-session");
const express = require("express");

express().use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

class Controller {
  static getLoginUser(_, res) {
    res.render("loginUser");
  }

  static postLoginUser(req, res) {
    let obj = {};
    User.findAll({
      where: {
        email: req.body.email,
        password: req.body.password,
      },
    })
      .then((data) => {
        if (
          data[0].email === req.body.email &&
          data[0].password === req.body.password
        ) {
          req.session.isLogin = true;
          req.session.userId = data[0].id;
          obj.user = data;
          return Transaction.findAll();
        } else res.send("Wrong email or password");
      })
      .then((data) => {
        obj.trans = data;
        res.redirect(`/transaction/table`);
      })
      .catch((_) => {
        res.send("Wrong email or password");
      });
  }

  static getRegisterUser(req, res) {
    res.render("registerUser");
  }

  static postRegisterUser(req, res) {
    User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      age: req.body.age,
      budget: req.body.budget,
      email: req.body.email,
      password: req.body.password,
    })
      .then(() => {
        res.redirect("/user/login");
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = Controller;
