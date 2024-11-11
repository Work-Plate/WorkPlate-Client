import PropTypes from "prop-types";
import { BalloonContainer1, Balloon } from "./ChatbotTextBalloon.styled";

const ChatbotTextBalloon = ({ children }) => {
  return (
    <BalloonContainer1>
      <Balloon>{children}</Balloon>
    </BalloonContainer1>
  );
};

ChatbotTextBalloon.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ChatbotTextBalloon;
