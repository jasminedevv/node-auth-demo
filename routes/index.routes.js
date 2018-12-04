const router = require('express').Router();
const config = require('../config/constants');

router.get('/', function(req, res) {
  // if (req.user)
  console.log(req);
  // console.log(req);
  res.render('index', {
    title: config.site.name,
    user: req.user

  });
});

module.exports = router;
