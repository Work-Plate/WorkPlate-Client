/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const ScrollBoxContainers = styled.div`
  width: 100%;
  height: 77vh; // Header UserInput의 높이 제외
  padding: 0;
  box-sizing: border-box;
  overflow-y: auto; // 스크롤 가능
  display: flex;
  flex-direction: column;

  // 스크롤바 숨기기
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
`;
