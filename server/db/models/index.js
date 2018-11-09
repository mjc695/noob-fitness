// do associations here

const User = require('./user');
const Exercise = require('./exercise');
const UserExercise = require('./userExercise');

User.belongsToMany(Exercise, { through: UserExercise });
Exercise.belongsToMany(User, { through: UserExercise });

module.exports = { User, Exercise, UserExercise };
