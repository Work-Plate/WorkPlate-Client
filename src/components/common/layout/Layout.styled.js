/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid #e0e0e0; // 구분을 위한 테두리 --- 빼기
`;

export const Content = styled.div`
  /* flex: 1; */
  width: 100%;
  padding: 0;
  /* box-sizing: border-box; */
`;
