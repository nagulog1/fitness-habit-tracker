import React, { useContext, useEffect, useState } from 'react';
import { HabitContext } from '../context/HabitContext';
import { AuthContext } from '../context/AuthContext';
import { HabitCard } from '../components/HabitCard';
import { CreateHabitForm } from '../components/CreateHabitForm';
import { Loader } from 'lucide-react';

export const Dashboard = () => {
  const { habits, loading, fetchHabits } = useContext(HabitContext);
  const { user, logout } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchHabits();
  }, [fetchHabits]);

  const totalHabits = habits.length;
  const completedToday = habits.filter(h => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return h.completedDates.some(
      d => new Date(d).setHours(0, 0, 0, 0) === today.getTime()
    );
  }).length;

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-brand-600">🏋️ Fitness Tracker</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-700">{user?.name}</span>
            <button
              onClick={logout}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600">Total Habits</p>
            <p className="text-4xl font-bold text-brand-600">{totalHabits}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-gray-600">Completed Today</p>
            <p className="text-4xl font-bold text-green-600">{completedToday}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Your Habits</h2>
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-brand-500 text-white px-6 py-2 rounded-lg hover:bg-brand-600 transition"
          >
            {showForm ? 'Cancel' : '+ Add Habit'}
          </button>
        </div>

        {showForm && <CreateHabitForm onClose={() => setShowForm(false)} />}

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader className="animate-spin text-brand-500" size={40} />
          </div>
        ) : habits.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No habits yet. Create one to get started!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {habits.map(habit => (
              <HabitCard key={habit._id} habit={habit} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
