const express = require("express");
const router = express.Router();
const userRoute = require("./userRoutes");
const transactionRoute = require("./transactionRoutes");
const tagRoute = require("./tagRoutes");

router.use("/", userRoute);
router.use("/user", userRoute);

router.use("/transaction", transactionRoute);

router.use("/tags", tagRoute);

module.exports = router;
