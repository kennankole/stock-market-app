import { useState } from 'react';
import FoodNameList from './StockList';

const SearchMeal = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search food here..."
          value={inputText}
          onChange={handleInputChange}
        />
      </div>
      <FoodNameList input={inputText} />
    </div>
  );
};
export default SearchMeal;
