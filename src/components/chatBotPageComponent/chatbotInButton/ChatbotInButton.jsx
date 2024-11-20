import { ButtonContainer } from "./ChatbotInButton.styled";
import { FaMicrophone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ChatbotInButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/chatbot");
  };

  return (
    <ButtonContainer onClick={handleClick}>
      <FaMicrophone />
    </ButtonContainer>
  );
};

export default ChatbotInButton;
