const db = require('./db/db.js');
const { green, red } = require('chalk');
// const User = require('./db/models/user');
const { User, Exercise, UserExercise } = require('./db/models');
// const UserExercise = require('./db/models/userExercise');

const users = [
  {
    firstName: 'Monferd',
    lastName: 'Collin',
    email: 'monmon@email.com',
    password: 123,
  },
];
const exercises = [
  {
    name: 'deadlift',
    type: 'compound',
    description: 'very difficult description',
  },
];
const usersExercise = [
  {
    userId: 1,
    exerciseId: 1,
    set: 1,
    rep: 8,
    rest: 40,
    weight: 185,
  },
];

const seed = async () => {
  // console.log(db);
  await db.sync({ force: true });

  await Promise.all(users.map(users => User.create(users)));
  await Promise.all(exercises.map(exercise => Exercise.create(exercise)));
  await Promise.all(usersExercise.map(set => UserExercise.create(set)));

  console.log(green('Seeding success!'));
  db.close();
};

seed().catch(err => {
  console.error(red('Oh no, something went wrong!'));
  console.error(err);
  db.close();
});
