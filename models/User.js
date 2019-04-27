const sequelize = require('../serverComponents/sequelize');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const User = sequelize.define('users', {
        username: {
            type: Sequelize.STRING(30),
            unique: true,
            allowNull: false
        },
        password: { //hashed, of course
            type: Sequelize.STRING,
            allowNull: false
        },
        user_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        admin: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    }, {
        hooks: {
          beforeCreate: (user) => {
            const salt = bcrypt.genSaltSync();
            user.password = bcrypt.hashSync(user.password, salt);
          }
        }
    });

// Instance Method
User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

// create all the defined tables in the specified database.
sequelize.sync()
    .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured: ', error));


module.exports = User;