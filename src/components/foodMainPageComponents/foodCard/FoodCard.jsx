import { FoodCardContainer } from "./FoodCard.styled";
import PropTypes from "prop-types";

const FoodCard = ({ imageSrc }) => {
  return <FoodCardContainer imageSrc={imageSrc} />;
};

FoodCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default FoodCard;
