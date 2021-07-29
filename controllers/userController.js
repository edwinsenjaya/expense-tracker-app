const { User } = require("../models");

class Controller {
  static getLoginUser(req, res) {
    res.render("loginUser");
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
        err = err.errors.map((el) => el.message);
        res.send(err.join(" "));
      });
  }
}

module.exports = Controller;
