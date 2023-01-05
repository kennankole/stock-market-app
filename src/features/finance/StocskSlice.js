/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';

const initialState = {
  foodData: [],
  status: 'idle',
  error: null,
};

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '66cdad9cd8msh9258ed8913c4fe3p1203dcjsne5071f0c13be',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  },
};

export const fetchStocksData = createAsyncThunk(
  'stocks/fetchStock',
  async () => {
    const response = await fetch(BASE_URL, options);
    const results = await response.json();
    return results;
  },
);

const stocksSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchStocksData.fulfilled, (state, action) => {
        state.status = 'success';
        state.foodData.push(...action.payload.results);
      })
      .addCase(fetchStocksData.rejected, (state, action) => {
        state.status = 'rejected';
        state.error = action.error.message;
      })
      .addCase(fetchStocksData.pending, (state) => {
        state.status = 'pending';
      });
  },
});

export default stocksSlice.reducer;
export const selectFoodById = (state, foodId) => (
  state.stocks.foodData).find((food) => food.id === Number(foodId));
