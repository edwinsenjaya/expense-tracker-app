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
        res.render("addTransaction", { data });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static postAddTransaction(req, res) {
    console.log("here");
    console.log(req.body);
  }
}

module.exports = Controller;
