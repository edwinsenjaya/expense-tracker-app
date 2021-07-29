const express = require("express");
const app = express();
const router = require("./routes/index");
const session = require("express-session");
const port = 3000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/", router);

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
