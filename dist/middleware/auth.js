var jwt = require("jsonwebtoken");
var config = require("../config/config");
var authentication = {
    check: function (req, res, next) {
        var token = req.headers["x-access-token"] || req.headers["authorization"];
        if (!token) {
            return res.status(401).json({ message: "Unauthorised." });
        }
        token = token.slice(7, token.length);
        jwt.verify(token, config.JWT_SECRET, function (error, user) {
            if (error) {
                return res.status(401).json({ message: "Invalid Token" });
            }
            req.user = user;
            next();
        });
    },
};
module.exports = authentication;
