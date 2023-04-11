import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from './app/store';
import App from './App';
import './index.css';
import { fetchMeals } from './features/finance/MealSlice';

const container = document.getElementById('root');
const root = createRoot(container);

store.dispatch(fetchMeals());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
