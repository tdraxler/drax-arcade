const path = require('path');
const express = require('express');
const Pool = require('pg').Pool;
const databaseInfo = require('./databaseinfo.js');

const pool = new Pool(databaseInfo);

const app = express(),
	PUBLIC_DIR = path.join(__dirname, "/public"),
    HOME_FILE = path.join(PUBLIC_DIR, '/index.html'),
    GAME_INDEX = path.join(PUBLIC_DIR, '/gameindex.html'),
    GAME_VIEW = path.join(PUBLIC_DIR, '/gameview.html')
app.use(express.static(PUBLIC_DIR));

app.get('/', (req, res) => {
    res.sendFile(HOME_FILE);
});

app.get('/games', (req, res) => {
    res.sendFile(GAME_INDEX);
});

app.get('/gameview', (req, res) => {
    res.sendFile(GAME_VIEW);
});

app.get('/testdb', (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}...`);
    console.log('Press Ctrl+C to quit.');
});
