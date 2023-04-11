import PropTypes from 'prop-types';
import { TailSpin } from 'react-loader-spinner';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FoodNameList = ({ query }) => {
  const mealsData = useSelector((state) => state.meals);
  const foodDataStatus = useSelector((state) => state.meals.status);
  const error = useSelector((state) => state.meals.error);
  const foodData = mealsData.foodData.filter((food) => {
    if (query === '') {
      return food;
    } if (food.name.toLowerCase() === query
     || food.name.toLowerCase().includes(query)) {
      return food.name;
    }
    return null;
  });

  let content;

  if (foodDataStatus === 'pending') {
    content = (
      <TailSpin
        height="80"
        width="80"
        color="#ffff"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible
      />
    );
  } else if (foodDataStatus === 'success') {
    content = foodData.map((foodItem) => (
      <div key={foodItem.id} className="image-container">
        <Link to={`/meals/${foodItem.id}`} className="button muted-button">
          <img
            src={foodItem.thumbnail_url}
            alt={foodItem.name}
          />
          <p>{ foodItem.name.substring(0, 40) }</p>
        </Link>
      </div>
    ));
  } else if (foodDataStatus === 'rejected') {
    content = <div>{error}</div>;
  }
  return (
    <div className="main-section">
      <div className="inner-section">
        { content }
      </div>
    </div>
  );
};

FoodNameList.defaultProps = {
  query: '',
};

FoodNameList.propTypes = {
  query: PropTypes.string,
};

export default FoodNameList;
