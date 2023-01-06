import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import StockDetail from './features/finance/SingleMealPage';
import SearchMeal from './features/finance/SearchField';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchMeal />} />
        <Route exact path="/meals/:mealsId" element={<StockDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
