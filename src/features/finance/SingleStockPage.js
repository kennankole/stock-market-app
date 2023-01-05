import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectFoodById } from './StocskSlice';

const StockDetail = () => {
  const { stocksId } = useParams();
  const data = useSelector((state) => selectFoodById(state, stocksId));
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
        { data.description }
      </p>
      <h2>Recipe</h2>
      { Object.values(data.instructions || data.recipes).map((recipe) => (
        <div key={recipe.id}>
          <li>{ recipe.display_text }</li>
        </div>
      ))}
      <h4>
        Preparation Time
        {' '}
        { data.prep_time_minutes}
        {' '}
        minutes
      </h4>
      <h4>
        Number of Servings
        {' '}
        { data.num_servings}
      </h4>
      <h4>
        { Object.values(data.credits).map((name) => (
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
