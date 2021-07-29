const express = require("express");
const Controller = require("../controllers/userController");
const router = express.Router();

router.get("/", Controller.getLoginUser);
router.get("/register", Controller.getRegisterUser);
router.post("/register", Controller.postRegisterUser);

router.get("/login", Controller.getLoginUser);
router.post("/login", Controller.postLoginUser);

module.exports = router;
