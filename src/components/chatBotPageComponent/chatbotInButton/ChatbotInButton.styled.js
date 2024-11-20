import styled from "@emotion/styled";

// 버튼 컨테이너 스타일
export const ButtonContainer = styled.button`
  position: fixed;
  bottom: 6rem;
  right: 1rem;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ff854c;

  border: none;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

  color: white;
  font-size: 30px;

  z-index: 1000;

  &:active {
    background-color: #e66122;
    transform: scale(0.95);
  }
`;
