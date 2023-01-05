/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Spinner from '../../components/Spinner';

const FoodNameList = (props) => {
  const stocksData = useSelector((state) => state.stocks);
  const foodDataStatus = useSelector((state) => state.stocks.status);
  const error = useSelector((state) => state.stocks.error);

  const foodData = stocksData.foodData.filter((food) => {
    if (props.input === '') {
      return food;
    } if (food.name.toLowerCase() === props.input.toLowerCase()
     || food.name.toLowerCase().includes(props.input.toLowerCase())) {
      return food.name;
    }
    return null;
  });

  let content;

  if (foodDataStatus === 'pending') {
    content = <Spinner text="Loading..." />;
  } else if (foodDataStatus === 'success') {
    content = foodData.map((foodItem) => (
      <div key={foodItem.id}>
        <img src={foodItem.thumbnail_url} alt={foodItem.name} width={400} />
        <Link to={`/stocks/${foodItem.id}`} className="button muted-button">
          <p>{ foodItem.name }</p>
        </Link>
      </div>
    ));
  } else if (foodDataStatus === 'rejected') {
    content = <div>{error}</div>;
  }
  return (
    <div>
      <h2>Welcome to your finance app</h2>
      { content }
    </div>
  );
};

export default FoodNameList;
