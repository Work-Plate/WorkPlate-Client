import styled from "@emotion/styled";

export const UserInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2vw;
  border: 2.5px solid #415058;
  border-radius: 2vw;
  background-color: white;
  width: calc(100% - 4vh);
  height: 7.7vh;
  position: fixed;
  bottom: 1.8vh;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
`;

export const UserTextInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 3vw;
  font-size: 4vw;
  background-color: transparent;
`;

export const VoiceButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1vw;
  margin-top: 1.3vw;
  font-size: 7vw;
  color: #555;
`;

export const SendButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 1vw;
  margin-left: 1vw;
  margin-top: 1.3vw;
  font-size: 7vw;
  color: #555;
`;
