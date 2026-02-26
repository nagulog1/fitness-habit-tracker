const Habit = require('../models/Habit');

const createHabit = async (req, res) => {
  try {
    const habit = await Habit.create({
      ...req.body,
      userId: req.userId
    });
    res.status(201).json(habit);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ userId: req.userId }).sort({ createdAt: -1 });
    res.json(habits);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const updateHabit = async (req, res) => {
  try {
    const habit = await Habit.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true }
    );
    if (!habit) return res.status(404).json({ message: 'Habit not found' });
    res.json(habit);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    if (!habit) return res.status(404).json({ message: 'Habit not found' });
    res.json({ message: 'Habit deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const toggleHabitCompletion = async (req, res) => {
  try {
    const habit = await Habit.findOne({ _id: req.params.id, userId: req.userId });
    if (!habit) return res.status(404).json({ message: 'Habit not found' });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const alreadyCompleted = habit.completedDates.some(
      (date) => new Date(date).setHours(0, 0, 0, 0) === today.getTime()
    );

    if (alreadyCompleted) {
      habit.completedDates = habit.completedDates.filter(
        (date) => new Date(date).setHours(0, 0, 0, 0) !== today.getTime()
      );
    } else {
      habit.completedDates.push(today);
    }

    habit.streakCurrent = calculateStreak(habit.completedDates);
    habit.streakLongest = Math.max(habit.streakLongest, habit.streakCurrent);

    await habit.save();
    res.json(habit);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

function calculateStreak(completedDates) {
  if (completedDates.length === 0) return 0;

  const sorted = completedDates
    .map((d) => new Date(d).setHours(0, 0, 0, 0))
    .sort((a, b) => b - a);

  let streak = 1;
  for (let i = 0; i < sorted.length - 1; i++) {
    const diff = (sorted[i] - sorted[i + 1]) / (1000 * 60 * 60 * 24);
    if (diff === 1) {
      streak++;
    } else {
      break;
    }
  }
  return streak;
}

module.exports = { createHabit, getHabits, updateHabit, deleteHabit, toggleHabitCompletion };
