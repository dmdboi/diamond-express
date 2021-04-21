var express = require("express");
var router = express.Router();
var authentication = require("../middleware/auth");
var userController = require("../controllers/users");
var wrapper = function (fn) { return function (req, res, next) {
    return Promise.resolve(fn(req, res, next).catch(next));
}; };
router.post("/register", wrapper(userController.register));
router.post("/login", wrapper(userController.login));
router.use(authentication.check);
router.get("/me", wrapper(userController.me));
//JWT Verification on login
router.get("/verify", wrapper(userController.verify));
//Update Account Route
router.post("/update", wrapper(userController.updateAccount));
//Delete Account Route
router.post("/delete", wrapper(userController.deleteAccount));
module.exports = router;
