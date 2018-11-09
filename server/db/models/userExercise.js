const db = require('../db');
const sequelize = require('sequelize');

const UserExercise = db.define('userExercise', {
  set: {
    type: sequelize.STRING,
  },
  rep: {
    type: sequelize.INTEGER,
  },
  rest: {
    type: sequelize.INTEGER,
  },
  weight: {
    type: sequelize.INTEGER,
  },
});

module.exports = UserExercise;
