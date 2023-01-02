import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StockList from './features/finance/StockList';
import StockDetail from './features/finance/StockDetail';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StockList />} />
        <Route path="detail" element={<StockDetail />} />
      </Routes>
    </div>
  );
}
export default App;
