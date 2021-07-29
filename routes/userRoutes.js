const express = require("express");
const Controller = require("../controllers/userController");
const router = express.Router();

router.get("/", Controller.getRegisterUser);
router.get("/register", Controller.getRegisterUser);
router.post("/register", Controller.postRegisterUser);

router.get("/login", Controller.getLoginUser);

module.exports = router;
