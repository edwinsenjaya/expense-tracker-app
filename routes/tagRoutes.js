const express = require("express");
const Controller = require("../controllers/tagController");
const router = express.Router();

router.get("/", Controller.viewTags);

module.exports = router;
