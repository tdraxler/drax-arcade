const sequelize = require('../serverComponents/sequelize');
const Sequelize = require('sequelize');

const Game = sequelize.define('games', 
{
  title: {
      type: Sequelize.STRING(30),
      unique: true,
      allowNull: false
  },
  game_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
  },
  game_rating: { //This value gets updated whenever the user rates the game.
    type: Sequelize.INTEGER,
    allowNull: true
  },
  filename: {
    type: Sequelize.STRING(30),
    unique: true,
    allowNull: true
  },
  preview_image: {
    type: Sequelize.STRING(30),
    allowNull: true
  },
  mobile_friendly: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  }
});

// create all the defined tables in the specified database.
sequelize.sync()
    .then(() => console.log('games table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured: ', error));


module.exports = Game;