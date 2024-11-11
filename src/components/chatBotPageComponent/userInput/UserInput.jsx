import PropTypes from "prop-types";
import {
  UserInputContainer,
  UserTextInput,
  VoiceButton,
  SendButton,
} from "./UserInput.styled";
import { FaMicrophone } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const UserInput = ({ value, onInputChange, onVoiceClick, onSend }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSend();
    }
  };

  return (
    <UserInputContainer>
      <UserTextInput
        type="text"
        value={value}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="메시지를 입력하세요..."
      />
      <VoiceButton onClick={onVoiceClick}>
        <FaMicrophone />
      </VoiceButton>
      <SendButton onClick={onSend}>
        <FiSend />
      </SendButton>
    </UserInputContainer>
  );
};

UserInput.propTypes = {
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onVoiceClick: PropTypes.func.isRequired,
  onSend: PropTypes.func.isRequired,
};

export default UserInput;
