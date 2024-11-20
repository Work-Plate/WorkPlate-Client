import PropTypes from "prop-types";
import { HeaderContainer, Title, Button, Icon } from "./SubHeader.styled";
import { useNavigate } from "react-router-dom";

const SubHeader = ({
  title,
  showLeftButton = false,
  leftLink = "/main",
  showRightButton = false,
  rightLink = "/",
  rightIcon = null,
}) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      {showLeftButton ? (
        <Button onClick={() => navigate("/main")}>
          <Icon src={"/icons/back.svg"} />
        </Button>
      ) : (
        <div style={{ width: "2vw" }} />
      )}

      <Title>{title}</Title>

      {showRightButton ? (
        <Button onClick={() => navigate(rightLink)}>
          {rightIcon ? <Icon src={rightIcon} /> : "?"}
        </Button>
      ) : (
        <div style={{ width: "2vw" }} />
      )}
    </HeaderContainer>
  );
};

SubHeader.propTypes = {
  title: PropTypes.string.isRequired,
  showLeftButton: PropTypes.bool,
  leftLink: PropTypes.string,
  showRightButton: PropTypes.bool,
  rightLink: PropTypes.string,
  rightIcon: PropTypes.string,
};

export default SubHeader;
