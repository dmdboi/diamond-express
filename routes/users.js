const express = require("express");
const router = express.Router();

const authentication = require("../middleware/auth");

const userController = require("../controllers/users");

const wrapper = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next).catch(next));

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
