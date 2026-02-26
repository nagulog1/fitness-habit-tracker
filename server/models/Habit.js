const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    enum: ['fitness', 'health', 'productivity', 'mindfulness', 'other'],
    default: 'other'
  },
  frequency: {
    type: [String],
    default: ['daily']
  },
  goal: {
    type: String,
    default: ''
  },
  completedDates: {
    type: [Date],
    default: []
  },
  streakCurrent: {
    type: Number,
    default: 0
  },
  streakLongest: {
    type: Number,
    default: 0
  },
  reminder: {
    enabled: { type: Boolean, default: false },
    time: { type: String, default: '08:00' }
  },
  color: {
    type: String,
    default: '#4CAF50'
  }
}, { timestamps: true });

module.exports = mongoose.model('Habit', habitSchema);
