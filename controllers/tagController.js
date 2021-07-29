const { Tag, Transaction } = require("../models");
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
  static viewTags(req, res) {
    let obj = {};
    Tag.findAll({
      include: [Transaction],
    })
      .then((data) => {
        obj.tag = data;
        return Transaction.findByPk(req.session.userId);
      })
      .then((data) => {
        obj.trans = data;
        const newData = obj.tag.map((el) =>
          el.Transactions.map((el) => el.amount)
        );
        obj.newData = newData;
        res.render("tagsTable", obj);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = Controller;
