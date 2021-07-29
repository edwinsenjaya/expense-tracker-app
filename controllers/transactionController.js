const { Transaction, Tag } = require("../models");

class Controller {
  static viewTransactionTable(req, res) {
    Transaction.findAll()
      .then((data) => {
        res.render("transactionsTable", { data });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getAddTransaction(req, res) {
    Tag.findAll()
      .then((data) => {
        // console.log(data, "<-- here");
        res.render("addTransaction", { data });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static postAddTransaction(req, res) {
    // console.log("here");
    console.log(req.body);
    res.send(req.body);
  }
}

module.exports = Controller;
