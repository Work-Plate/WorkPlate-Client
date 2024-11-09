/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  height: 100vh; // 이만큼?
  aspect-ratio: 9 / 20; //비율로 처리
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid #e0e0e0; // 구분을 위한 테두리 --- 빼기
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
`;
