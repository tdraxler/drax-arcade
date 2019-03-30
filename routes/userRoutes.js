const User = require('../models/User'),
      bodyParser = require('body-parser'),
      express = require('express'),
      router = express.Router(),
      // secret = require('../tokeninfo'),
      // jwt = require('jsonwebtoken'),
      { isLoggedIn, checkAuth } = require('../serverComponents/middleware');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));





router.get('/testdb', (req, res) => {
  User.findAll()
    .then(users => res.status(200).json(users));
});

router.post('/createUser', (req, res) => {
  console.log(req.body);
  const { username, password, passwordB } = req.body;
  //Check to make sure the password is in a valid format

  if (password === passwordB && username.length <= 30) {
    //Need to check if the user exists already...
    User.create(req.body)
    .then(user => {
      req.session.user = user.dataValues;
      res.sendStatus(200);
    }).catch(err => {
      res.sendStatus(403);
    });
  }
  else {
    res.sendStatus(403);
  }


});

// POST: login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({
      where: {
          username: username
      }
  }).then(user => {
    if (!user) {
      console.log("No user found, I guess");
      res.sendStatus(401);
    } 
    else if (!user.validPassword(password)) {
      console.log("Wrong password");
      res.sendStatus(401);
    }
    else {
      req.session.user = user.dataValues;
      res.sendStatus(200);
    }
  }).catch(err => {
    console.log(err);
    res.sendStatus(403);
  });
});

router.get('/checkAuth', checkAuth, (req, res) => {
  res.sendStatus(200);
});

// GET: logout
router.get('/logout', (req, res) => {
  if (isLoggedIn(req)) {
    req.clearCookie('user_sid');
  }
  res.sendStatus(200);
});

// GET: userinfo
router.get('/userInfo', (req, res) => {
  if (!isLoggedIn(req)) {
    res.status(200).send({username: ''});
  } else {
    res.status(200).send({
      username: req.session.user.username
    });
  }
});

module.exports = router;