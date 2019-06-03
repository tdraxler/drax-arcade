const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const sessionSecret = require('./sessioninfo');

const app = express(),
	PUBLIC_DIR = path.join(__dirname, "/public"),
    HOME_FILE = path.join(PUBLIC_DIR, '/index.html'),
    GAME_VIEW = path.join(PUBLIC_DIR, '/gameview.html')


app.use(express.static(PUBLIC_DIR));
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(cookieParser());

app.use(session({
    key: 'user_sid',
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: 600000
    }
}));

app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');        
    }
    next();
});

const userRoutes = require('./routes/userRoutes');
const gameRoutes = require('./routes/gameRoutes');




// app.get('/gameview', (req, res) => {
//     console.log("Request for game view");
//     res.sendFile(GAME_VIEW);
// });


app.use(userRoutes);
app.get('/*', (req, res) => {
    res.sendFile(HOME_FILE);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}...`);
    console.log('Press Ctrl+C to quit.');
});
