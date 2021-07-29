const { Transaction, Tag, User, TransactionTag } = require("../models");
const session = require("express-session");
const express = require("express");
const currentBalance = require("../helpers/calcCurrentBalance");
express().use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

class Controller {
  static viewTransactionTable(req, res) {
    Transaction.findAll(
      {
        include: [User, Tag],
      },
      {
        where: {
          UserId: req.session.userId,
        },
      }
    )
      .then((data) => {
        console.log(data);
        const transactions = data.map((el) => el.amount);
        const sum = currentBalance(transactions);

        let tags = data.map((el) => el.Tags.map((el) => el.tag_name));

        res.render("transactionsTable", { data, sum, tags });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getAddTransaction(req, res) {
    let obj = {};
    Tag.findAll()
      .then((data) => {
        obj.tag = data;
        return User.findByPk(req.session.userId);
      })
      .then((data) => {
        obj.user = data;
        res.render("addTransaction", obj);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static postAddTransaction(req, res) {
    Transaction.create({
      name: req.body.name,
      date: req.body.date,
      amount: req.body.amount,
      UserId: req.session.userId,
    })
      .then(() => {
        return Transaction.findOne({
          where: {
            name: req.body.name,
          },
        });
      })
      .then((data) => {
        if (typeof req.body.TagId === "string") {
          TransactionTag.create({
            TransactionId: data.id,
            TagId: req.body.TagId,
          });
        } else {
          req.body.TagId.forEach((el) => {
            TransactionTag.create({
              TransactionId: data.id,
              TagId: el,
            });
          });
        }
      })
      .then(() => {
        res.redirect("/transaction/table");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getEditTransaction(req, res) {
    let obj = {};
    Transaction.findByPk(req.params.id)
      .then((data) => {
        obj.trans = data;
        return Tag.findAll();
      })
      .then((data) => {
        obj.tag = data;
        res.render("editTransaction", obj);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static postEditTransaction(req, res) {
    Transaction.update(
      {
        name: req.body.name,
        date: req.body.date,
        amount: req.body.amount,
        UserId: req.session.userId,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
      .then(() => {
        TransactionTag.destroy({
          where: {
            TransactionId: req.params.id,
          },
        });
      })
      .then(() => {
        if (typeof req.body.TagId === "string") {
          TransactionTag.create({
            TransactionId: req.params.id,
            TagId: req.body.TagId,
          });
        } else {
          req.body.TagId.forEach((el) => {
            TransactionTag.create({
              TransactionId: req.params.id,
              TagId: el,
            });
          });
        }
      })
      .then(() => {
        res.redirect("/transaction/table");
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static deleteTransaction(req, res) {
    Transaction.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => {
        TransactionTag.destroy({
          where: {
            TransactionId: req.params.id,
          },
        });
      })
      .then(() => {
        res.redirect("/transaction/table");
      });
  }
}

module.exports = Controller;
