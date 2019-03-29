const User = require('../models/User'),
      bodyParser = require('body-parser'),
      express = require('express'),
      bcrypt = require('bcrypt');
      router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/testdb', (req, res) => {
    User.findAll()
        .then(users => res.status(200).json(users));
});

router.post('/createUser', (req, res) => {
    console.log(req.body);
    User.create(req.body)
        .then(user => {
            res.status(200).send("Successfully added this user to the database.");
        });
});

// POST: login

// POST: logout

// GET: userinfo

module.exports = router;