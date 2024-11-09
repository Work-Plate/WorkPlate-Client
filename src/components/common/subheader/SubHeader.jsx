import PropTypes from "prop-types";
import { HeaderContainer, Title, Button, Icon } from "./SubHeader.styled";
import { useNavigate } from "react-router-dom";

const SubHeader = ({
  title,
  showLeftButton = false,
  leftLink = "/",
  showRightButton = false,
  rightLink = "/",
  rightIcon = null,
}) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      {showLeftButton ? (
        <Button onClick={() => navigate(leftLink)}>
          <Icon src={"./public/icons/back.svg"} />
        </Button>
      ) : (
        <div style={{ width: "3vw" }} />
      )}

      <Title>{title}</Title>

      {showRightButton ? (
        <Button onClick={() => navigate(rightLink)}>
          {rightIcon ? <Icon src={rightIcon} /> : "?"}
        </Button>
      ) : (
        <div style={{ width: "3vw" }} />
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
  rightIcon: PropTypes.string, // 아이콘 이미지 URL
};

export default SubHeader;
