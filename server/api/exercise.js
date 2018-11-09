const router = require('express').Router();
const { Exercise } = require('../db/models/exercise');
module.exports = router;

router.get('/', async (req, res, next) => {
  console.log('routing');
  try {
    const exercise = await Exercise.findAll({
      attributes: ['id', 'firstName', 'lastName', 'email', 'isAdmin'],
    });
    res.json(exercise);
  } catch (err) {
    console.log(err);
  }
});
