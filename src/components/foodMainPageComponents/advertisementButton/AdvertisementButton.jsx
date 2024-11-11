import { AdvertisementButtonContainer } from "./AdvertisementButton.styled";
import PropTypes from "prop-types";

const AdvertisementButton = ({ onClick }) => {
  return <AdvertisementButtonContainer onClick={onClick} />;
};

AdvertisementButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AdvertisementButton;
