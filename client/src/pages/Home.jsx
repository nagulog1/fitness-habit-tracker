import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 to-green-100">
      <nav className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-brand-600">🏋️ Fitness Tracker</h1>
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/login')}
              className="text-brand-600 hover:text-brand-700 font-semibold"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/register')}
              className="bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600"
            >
              Register
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl font-bold text-gray-800 mb-4">Build Better Habits</h2>
        <p className="text-xl text-gray-600 mb-8">Track your fitness journey and develop lasting healthy habits with our simple and powerful habit tracker.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-xl font-bold mb-2">Track Progress</h3>
            <p className="text-gray-600">Monitor your daily habits and see your progress over time with detailed statistics.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-xl font-bold mb-2">Build Streaks</h3>
            <p className="text-gray-600">Stay motivated by building consecutive day streaks. The longer your streak, the better!</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-2">Set Goals</h3>
            <p className="text-gray-600">Create custom habits across fitness, health, productivity, and mindfulness categories.</p>
          </div>
        </div>

        <button
          onClick={() => navigate('/register')}
          className="bg-brand-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:bg-brand-600 transition"
        >
          Get Started Today
        </button>
      </div>
    </div>
  );
};
