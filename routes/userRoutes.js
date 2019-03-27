const Pool = require('pg').Pool,
      databaseInfo = require('../databaseinfo.js'),
      bodyParser = require('body-parser'),
      express = require('express'),
      router = express.Router();

const pool = new Pool(databaseInfo);

router.get('/testdb', (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
});


module.exports = router;