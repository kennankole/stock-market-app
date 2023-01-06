import { configureStore } from '@reduxjs/toolkit';
import mealsReducer from '../features/finance/MealSlice';

export default configureStore({
  reducer: {
    meals: mealsReducer,
  },
});
