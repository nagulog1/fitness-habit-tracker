import React, { createContext, useState, useCallback, useEffect } from 'react';
import { habitAPI } from '../services/api';

export const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHabits = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await habitAPI.getAll();
      setHabits(response.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch habits');
    } finally {
      setLoading(false);
    }
  }, []);

  const createHabit = useCallback(async (habitData) => {
    try {
      const response = await habitAPI.create(habitData);
      setHabits([response.data, ...habits]);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create habit');
      throw err;
    }
  }, [habits]);

  const updateHabit = useCallback(async (id, habitData) => {
    try {
      const response = await habitAPI.update(id, habitData);
      setHabits(habits.map(h => h._id === id ? response.data : h));
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update habit');
      throw err;
    }
  }, [habits]);

  const deleteHabit = useCallback(async (id) => {
    try {
      await habitAPI.delete(id);
      setHabits(habits.filter(h => h._id !== id));
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to delete habit');
      throw err;
    }
  }, [habits]);

  const toggleHabitCompletion = useCallback(async (id) => {
    try {
      const response = await habitAPI.toggle(id);
      setHabits(habits.map(h => h._id === id ? response.data : h));
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to toggle habit');
      throw err;
    }
  }, [habits]);

  const value = {
    habits,
    loading,
    error,
    fetchHabits,
    createHabit,
    updateHabit,
    deleteHabit,
    toggleHabitCompletion,
  };

  return (
    <HabitContext.Provider value={value}>
      {children}
    </HabitContext.Provider>
  );
};
