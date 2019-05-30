# Drax Arcade

Drax Arcade is a web app for playing games. Visitors can create accounts, play games, save their high scores, rate the games, and leave comments.

## How to run this app

The easiest way would be to visit the site where this is being hosted: (Not available yet!)

If you're hosting this on your own, first make sure the script has been built.
```
npm run build
```

TODO: Instructions for using PostgreSQL and its ORM with this app.

Then run the app with:
```
npm start
```

## Packages and tools I used to make this
Express: I like using this for routing with Node.js.
Webpack: Good for bundling all my scripts into a single file, among other things.
Babel: I've found ES6 (and beyond) features to be very helpful and convenient with JavaScript.
React: Great for making web apps and working with the DOM.
PostgreSQL: Using an ORM (Sequelize), I get a convenient way to interact with a relational database. The database stores the user account info, as well as info on games.
Bootstrap: Using react-bootstrap, the app already looks a little more stylish.

## Thoughts

### Why I made this
I created this project so that I'm more familiar with modern methods of making a CRUD (create, read, update, destroy) app.
Sometimes I like to make little games for fun, and making an app like this allows me to showcase what I've made.

### What I learned while doing this
I gained confidence in using Redux to handle the state.
I learned how to use Bootstrap with React using react-bootstrap.
I learned how to make a single-page app.

### What I would do if I were to start again from the beginning

Credit:

1. https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8
This was for helping me set up a database server with PostgreSQL and incorporating it into Node/Express.