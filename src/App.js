import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StockDetail from './features/finance/SingleStockPage';
import SearchMeal from './features/finance/SearchField';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchMeal />} />
        <Route exact path="/stocks/:stocksId" element={<StockDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
