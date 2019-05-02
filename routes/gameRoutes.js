const Game = require('../models/Game'),
      bodyParser = require('body-parser'),
      express = require('express'),
      router = express.Router(),
      // secret = require('../tokeninfo'),
      // jwt = require('jsonwebtoken'),
      { isLoggedIn, checkAuth } = require('../serverComponents/middleware');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));




module.exports = router;