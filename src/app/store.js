import { configureStore } from '@reduxjs/toolkit';
import stocksReducer from '../features/finance/StocskSlice';

export default configureStore({
  reducer: {
    stocks: stocksReducer,
  },
});
