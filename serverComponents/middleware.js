//This module checks for a valid token from the user (useful for website things that can only be
//done by authorized users such as voting and leaving comments)

// const jwt = require('jsonwebtoken');
// const secret = require('../tokeninfo');
const session = require('express-session');

// const withAuth = (req, res, next) => {
//   console.log("Checking credentials of a user...");
//   const token =
//     req.body.token ||
//     req.query.token ||
//     req.headers['x-access-token'] ||
//     req.cookies.token;

//   if (!token) {
//     res.status(401).send('Unauthorized: No token provided!');
//   } else {
//     jwt.verify(token, secret, (err, decoded) => {
//       if (err) {
//         res.status(401).send('Unauthorized: Invalid token');
//       } else {
//         req.username = decoded.username;
//         next();
//       }
//     });
//   }
// };

// const isLoggedIn = (req, res, next) => {
//   if (req.session.user && req.cookies.user_sid) {
//     next();
//   } else {
//     res.status(401).send('Unauthorized - Not logged in');
//   }
// };

const isLoggedIn = (req) => {
  return req.session.user && req.cookies.user_sid;
}

const checkAuth = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
    next();
  } else {
    res.sendStatus(401);
  }
}

module.exports = {isLoggedIn, checkAuth };