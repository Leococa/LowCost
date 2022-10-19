var express = require('express');
var records = require('../data/typeExpenses');
var router = express.Router();
router.get('/', function(req, res, next) {
 res.send(JSON.stringify(records));
});
module.exports = router;
