const jwt = require("jsonwebtoken");
const config = require("../config/config");

const authentication = {
  check: function (req, res, next) {
    let token = req.headers["x-access-token"] || req.headers["authorization"];

    if (!token) {
      return res.status(401).json({ message: "Unauthorised." });
    }

    token = token.slice(7, token.length);

    jwt.verify(token, config.JWT_SECRET, (error, user) => {
      if (error) {
        return res.status(401).json({ message: "Invalid Token" });
      }

      req.user = user;
      next();
    });
  },
};

module.exports = authentication;
