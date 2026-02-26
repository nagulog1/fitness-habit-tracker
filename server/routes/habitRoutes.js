const express = require('express');
const router = express.Router();
const {
  createHabit,
  getHabits,
  updateHabit,
  deleteHabit,
  toggleHabitCompletion
} = require('../controllers/habitController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.route('/')
  .get(getHabits)
  .post(createHabit);

router.route('/:id')
  .put(updateHabit)
  .delete(deleteHabit);

router.patch('/:id/toggle', toggleHabitCompletion);

module.exports = router;
