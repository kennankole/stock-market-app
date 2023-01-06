import { useState } from 'react';
import FoodNameList from './FoodList';

const SearchMeal = () => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <section>
      <div className="site-title">
        <h2>Welcome to Vegan Foods</h2>
        <h5><em>Let your food be thine medicine</em></h5>
      </div>
      <div className="meal-section">
        <input
          type="text"
          placeholder="Search meal..."
          value={inputText}
          onChange={handleInputChange}
        />
      </div>
      <FoodNameList input={inputText} />
    </section>
  );
};
export default SearchMeal;
