import React, { useState, useContext } from 'react';
import { HabitContext } from '../context/HabitContext';

export const CreateHabitForm = ({ onClose }) => {
  const { createHabit } = useContext(HabitContext);
  const [formData, setFormData] = useState({
    name: '',
    category: 'fitness',
    goal: '',
    color: '#4CAF50',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await createHabit(formData);
      setFormData({ name: '', category: 'fitness', goal: '', color: '#4CAF50' });
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create habit');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h3 className="text-xl font-bold mb-4">Create New Habit</h3>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Habit Name (e.g., Morning Run)"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
        />

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
        >
          <option value="fitness">Fitness</option>
          <option value="health">Health</option>
          <option value="productivity">Productivity</option>
          <option value="mindfulness">Mindfulness</option>
          <option value="other">Other</option>
        </select>

        <input
          type="text"
          name="goal"
          placeholder="Goal (e.g., 30 minutes)"
          value={formData.goal}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500"
        />

        <div className="flex gap-2">
          <input
            type="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
            className="w-16 h-10 border border-gray-300 rounded-lg cursor-pointer"
          />
          <span className="px-4 py-2 text-gray-700">Choose Color</span>
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-brand-500 text-white py-2 rounded-lg hover:bg-brand-600 transition disabled:opacity-50"
          >
            {loading ? 'Creating...' : 'Create Habit'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 bg-gray-300 text-gray-700 py-2 rounded-lg hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
