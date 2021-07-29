const session = require("express-session");
const express = require("express");
express().use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

function isUserLogin(req, res, next) {
  if (req.session.isLogin === true) {
    next();
  } else {
    res.send("Please login first");
  }
}

module.exports = isUserLogin;
