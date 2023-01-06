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
    'X-RapidAPI-Key': '9da766b5d5msh87a12c25035128ep162c73jsn0dacddd7bdee',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
  },
};

export const fetchMeals = createAsyncThunk(
  'stocks/fetchStock',
  async () => {
    const response = await fetch(BASE_URL, options);
    const results = await response.json();
    return results;
  },
);

const mealSlice = createSlice({
  name: 'stocks',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMeals.fulfilled, (state, action) => {
        const states = state;
        states.status = 'success';
        states.foodData.push(...action.payload.results);
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        const states = state;
        states.status = 'rejected';
        states.error = action.error.message;
      })
      .addCase(fetchMeals.pending, (state) => {
        const states = state;
        states.status = 'pending';
      });
  },
});

export default mealSlice.reducer;
export const selectFoodById = (state, foodId) => (
  state.meals.foodData).find((food) => food.id === Number(foodId));
