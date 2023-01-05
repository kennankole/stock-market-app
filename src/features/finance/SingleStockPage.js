/* eslint-disable arrow-body-style */
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectFoodById } from './StocskSlice';

const StockDetail = () => {
  const { stocksId } = useParams();
  const data = useSelector((state) => selectFoodById(state, stocksId));

  console.log(data[0]);
  if (!data) {
    return (
      <section>
        <h2>Food Item Details not found!</h2>
      </section>
    );
  }
  return (
    <section>
      { stocksId }
      <p>
        Meal Description:
        {' '}
        { data[0].description }
      </p>
      <h2>Recipe</h2>
      { Object.values(data[0].instructions).map((recipe) => (
        <div key={recipe.id}>
          <li>{ recipe.display_text }</li>
        </div>
      ))}
      <h4>
        Preparation Time
        {' '}
        { data[0].prep_time_minutes}
        {' '}
        minutes
      </h4>
      <h4>
        Number of Servings
        {' '}
        { data[0].num_servings}
      </h4>
      <h4>
        { Object.values(data[0].credits).map((name) => (
          <ul key={stocksId}>
            <li>
              Credits to
              {' '}
              { name.name }
            </li>
          </ul>
        ))}
      </h4>
    </section>
  );
};
export default StockDetail;
