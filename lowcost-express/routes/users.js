var express = require('express');
const { isLoggedIn } = require('../auth');
var router = express.Router();

/* GET users listing. */
router.get('/', async function(req, res, next) {
  if(await isLoggedIn(req, res)) {
    next();
  } else {
    res.status(403);
    res.send('You don\'t have the right to access this page');
  }
});

module.exports = router;
