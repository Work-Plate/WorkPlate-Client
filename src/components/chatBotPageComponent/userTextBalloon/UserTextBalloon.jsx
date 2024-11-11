import PropTypes from "prop-types";
import { BalloonContainer2, Balloon } from "./UserTextBalloon.styled";

const UserTextBalloon = ({ children }) => {
  return (
    <BalloonContainer2>
      <Balloon>{children}</Balloon>
    </BalloonContainer2>
  );
};

UserTextBalloon.propTypes = {
  children: PropTypes.string.isRequired,
};

export default UserTextBalloon;
