const User = require('../models/User'),
      bodyParser = require('body-parser'),
      express = require('express'),
      router = express.Router(),
      secret = require('../tokeninfo'),
      jwt = require('jsonwebtoken'),
      withAuth = require('../serverComponents/middleware');

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
    User.create(req.body)
    .then(user => {
      const payload = { username };
      const token = jwt.sign(payload, secret, {
        expiresIn: '2h'
      });
      res.cookie('token', token, { httpOnly: true }).sendStatus(200);
      //res.status(200).send("Successfully added this user to the database.");
    }).catch(err => {
      console.log(err);
    });
  }
  //Check to see if that user already exists


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
    } else {
      //Grant a token
      if (user.validPassword(password)) { 
        const payload = { username };
        const token = jwt.sign(payload, secret, {
          expiresIn: '2h'
        });
        res.cookie('token', token, { httpOnly: true }).sendStatus(200);
      } else {
        res.status(401)
          .json({
            error: 'Couldn\'t log in'
          })
      }
    }
  }).catch(err => {
    console.log(err);
  });
});

router.get('/checkToken', withAuth, (req, res) => {
  res.sendStatus(200);
});

// POST: logout

// GET: userinfo

module.exports = router;