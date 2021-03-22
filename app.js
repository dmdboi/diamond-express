const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const config = require("./config/config")

const fileupload = require('express-fileupload');

require("./services/database")

const app = express();

app.use(
  cors({
    origin: "http://localhost:8080",
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(fileupload({
    createParentPath: true
}))

app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send({ message: "Something went wrong with this request" });
});


app.listen(config.PORT, () => {
    console.log(`Server start on PORT: ${config.PORT}`)
})