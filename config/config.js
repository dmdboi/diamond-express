require("dotenv").config();

const configs = {
  PORT: process.env.PORT || 3000,
  DB_NAME: "express",
  DB_URL: process.env.DB_URL || "mongodb://localhost:27017/express",

  JWT_SECRET: process.env.JWT_SECRET,
};

module.exports = configs;
