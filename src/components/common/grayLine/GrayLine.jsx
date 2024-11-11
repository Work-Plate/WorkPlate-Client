import PropTypes from "prop-types";
import { GrayLine as StyledGrayLine } from "./GrayLine.styled";

const GrayLine = ({ width, thickness, magin }) => {
  return <StyledGrayLine width={width} thickness={thickness} margin={magin} />;
};

GrayLine.propTypes = {
  width: PropTypes.string,
  thickness: PropTypes.string,
  magin: PropTypes.string,
};

export default GrayLine;
