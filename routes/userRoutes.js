const Pool = require('pg').Pool,
      databaseInfo = require('../databaseinfo.js'),
      bodyParser = require('body-parser'),
      express = require('express'),
      bcrypt = require('bcrypt');
      router = express.Router();

const pool = new Pool(databaseInfo);

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/testdb', (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
});

router.post('/createUser', (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;

    const saltRounds = 10;
    console.log(username + ", " + password);

    bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
        if (err) {
            console.log("Server: There is a problem setting the password: ");
            console.log(err);
            res.status(500).send('Problem with hashing the password');
        }
        else {
            pool.query(
                'INSERT INTO users (username, password) VALUES ($1, $2)', 
                [username, hashedPassword], 
                (error, results) => {
                    if (error) {
                        res.status(500).send("Couldn't sign up this user");
                        throw error;
                    }
                    else {
                        res.status(200).send("Successfully added this user to the database.");
                    }
                });
        }
    });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

});
module.exports = router;