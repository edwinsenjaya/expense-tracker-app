const express = require("express");
const Controller = require("../controllers/transactionController");
const router = express.Router();
const isUserLogin = require("../middleware/checkLogin");

router.get("/table", Controller.viewTransactionTable);

router.get("/:id/add", Controller.getAddTransaction);
// router.post("/add", Controller.postAddCast);

// router.get("/:id/edit", Controller.getEditCast);
// router.post("/:id/edit", Controller.postEditCast);

// router.get("/:id/seeMovies", Controller.getSeeMovies);

// router.get("/:id/delete", Controller.deleteCast);

module.exports = router;
