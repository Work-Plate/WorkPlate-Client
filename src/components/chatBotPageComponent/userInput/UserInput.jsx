import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
  UserInputContainer,
  UserTextInput,
  VoiceButton,
  SendButton,
} from "./UserInput.styled";
import { FaMicrophone } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const UserInput = ({ value, onInputChange, onSend }) => {
  const recognitionRef = useRef(null);

  useEffect(() => {
    if ("SpeechRecognition" in window || "webkitSpeechRecognition" in window) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = "ko-KR"; // 한국어 설정
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      // 음성 인식 결과가 나오면 onInputChange로 전달
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        onInputChange(transcript); // 변환된 텍스트를 입력 필드에 반영
      };

      recognition.onerror = (event) => {
        console.error("음성 인식 오류:", event.error);
      };

      recognitionRef.current = recognition;
    } else {
      console.warn("이 브라우저는 음성 인식을 지원하지 않습니다!!");
    }
  }, [onInputChange]);

  const handleVoiceClick = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start(); // 음성 인식 시작
      console.log("음성 인식");
    } else {
      console.warn("음성 인식 기능 사용 불가!!!");
    }
  };

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
      <VoiceButton onClick={handleVoiceClick}>
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
