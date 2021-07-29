const express = require("express");
const Controller = require("../controllers/transactionController");
const router = express.Router();
const isUserLogin = require("../middleware/checkLogin");

router.get("/table", Controller.viewTransactionTable);

router.get("/add", Controller.getAddTransaction);
router.post("/add", Controller.postAddTransaction);

router.get("/:id/edit", Controller.getEditTransaction);
router.post("/:id/edit", Controller.postEditTransaction);

router.get("/:id/delete", Controller.deleteTransaction);

module.exports = router;
