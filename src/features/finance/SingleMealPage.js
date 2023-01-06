import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectFoodById } from './MealSlice';

const MealDetail = () => {
  const { mealsId } = useParams();
  const data = useSelector((state) => selectFoodById(state, mealsId));
  if (!data) {
    return (
      <section className="food-error">
        <h2>Food Item Details not found!</h2>
      </section>
    );
  }
  return (
    <section className="food-detail">
      <Link to="/">
        { '<<' }
      </Link>
      <div className="food-section">
        <div className="food-description">
          <h4>Meal Description</h4>
          <p>{ data.description }</p>
        </div>
        <div className="recipe">
          <h4>Recipe</h4>
          { Object.values(data.instructions || data.recipes).map((recipe) => (
            <div key={recipe.id}>
              <li>{ recipe.display_text }</li>
            </div>
          ))}
        </div>
        <div className="prep-time">
          <p>
            Preparation time
            {' '}
            <strong>
              { data.prep_time_minutes}
              {' '}
              minutes
            </strong>
          </p>
        </div>
        <div className="serving">
          <p>
            Number of servings
            {' '}
            <strong>
              { data.num_servings}
            </strong>
          </p>
        </div>
        <div className="credits">
          <h4>Credits to!!</h4>
          { Object.values(data.credits).map((name) => (
            <li key={mealsId}>
              {' >> '}
              { name.name }
            </li>
          ))}
        </div>
      </div>
    </section>
  );
};
export default MealDetail;
