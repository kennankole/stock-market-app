import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from './app/store';
import App from './App';
import './index.css';
import { fetchStocksData } from './features/finance/StocskSlice';

const container = document.getElementById('root');
const root = createRoot(container);

store.dispatch(fetchStocksData());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
