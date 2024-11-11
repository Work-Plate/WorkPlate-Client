import PropTypes from "prop-types";
import { StyledText } from "./Text.styled";

const Text = ({ children, size, color, weight, align, lineHeight, margin }) => {
  return (
    <StyledText
      size={size}
      color={color}
      weight={weight}
      align={align}
      lineHeight={lineHeight}
      margin={margin}
    >
      {children}
    </StyledText>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
  align: PropTypes.string,
  lineHeight: PropTypes.string,
  margin: PropTypes.string,
};

export default Text;
