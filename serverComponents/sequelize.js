const Sequelize = require('sequelize');

const databaseInfo = require('../databaseinfo.js');

const sequelize = new Sequelize(databaseInfo.database, databaseInfo.user, databaseInfo.password, {
    host: databaseInfo.host,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log("--Connection has been successfully established to the database.--");
    })
    .catch(err => {
        console.error("Unable to connect to the database.");
    });

module.exports = sequelize;