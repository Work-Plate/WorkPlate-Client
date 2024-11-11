/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const BalloonContainer1 = styled.div`
  display: flex;
  justify-content: flex-start; // 왼쪽
  padding: 2rem 0 0 2rem;
`;

export const Balloon = styled.div`
  max-width: 90%;
  background-color: #ff854c;
  color: white;
  padding: 1rem;
  border-radius: 1rem;
  border-bottom-left-radius: 0;
  font-size: 1rem;
  line-height: 1.4;
  font-weight: 400;
  text-align: left;
  word-break: break-word; //  단어가 말풍선 너비를 초과할 때 줄바꿈을 자동으로 처리!
`;
