const express = require('express');
const router = express.Router();

const indexController = require("../controllers/index")

const wrapper = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next).catch(next));

/* GET home page. */
router.get('/', wrapper(indexController.home));

router.post('/upload', wrapper(indexController.uploadFile))

module.exports = router;
