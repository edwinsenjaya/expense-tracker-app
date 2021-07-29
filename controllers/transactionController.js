const { Transaction } = require("../models");

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
    console.log(req.session);

    res.render("addTransaction");
  }
}

module.exports = Controller;
