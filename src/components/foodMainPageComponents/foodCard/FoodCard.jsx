import { FoodCardContainer } from "./FoodCard.styled";
import PropTypes from "prop-types";

const FoodCard = ({ onClick }) => {
  return <FoodCardContainer onClick={onClick} />;
};

FoodCard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default FoodCard;
