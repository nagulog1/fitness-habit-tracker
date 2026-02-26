import React, { useContext, useState } from 'react';
import { HabitContext } from '../context/HabitContext';
import { Trash2, Check } from 'lucide-react';

export const HabitCard = ({ habit }) => {
  const { deleteHabit, toggleHabitCompletion } = useContext(HabitContext);
  const [loading, setLoading] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isCompletedToday = habit.completedDates.some(
    d => new Date(d).setHours(0, 0, 0, 0) === today.getTime()
  );

  const handleToggle = async () => {
    setLoading(true);
    try {
      await toggleHabitCompletion(habit._id);
    } catch (err) {
      console.error('Failed to toggle habit:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this habit?')) {
      try {
        await deleteHabit(habit._id);
      } catch (err) {
        console.error('Failed to delete habit:', err);
      }
    }
  };

  return (
    <div
      className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
      style={{ borderTop: `4px solid ${habit.color}` }}
    >
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800">{habit.name}</h3>
          <p className="text-gray-600 text-sm capitalize">{habit.category}</p>
          {habit.goal && <p className="text-gray-700 text-sm mt-1">Goal: {habit.goal}</p>}
        </div>
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 transition"
        >
          <Trash2 size={20} />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4 text-center">
        <div>
          <p className="text-gray-600 text-sm">Current Streak</p>
          <p className="text-2xl font-bold text-brand-600">{habit.streakCurrent}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Longest Streak</p>
          <p className="text-2xl font-bold text-brand-600">{habit.streakLongest}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm">Total Days</p>
          <p className="text-2xl font-bold text-brand-600">{habit.completedDates.length}</p>
        </div>
      </div>

      <button
        onClick={handleToggle}
        disabled={loading}
        className={`w-full py-2 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
          isCompletedToday
            ? 'bg-green-500 text-white hover:bg-green-600'
            : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        } disabled:opacity-50`}
      >
        <Check size={20} />
        {isCompletedToday ? 'Completed Today ✓' : 'Mark as Done'}
      </button>
    </div>
  );
};
