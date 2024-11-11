/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const BalloonContainer2 = styled.div`
  display: flex;
  justify-content: flex-end; // 오른쪽
  padding: 1.5rem 1rem 0 0;
`;

export const Balloon = styled.div`
  max-width: 90%;
  background-color: #f5f6f9;
  color: #333;
  padding: 0.7rem 1.5rem 0.7rem 1.5rem;
  border-radius: 1.5rem;
  border-bottom-right-radius: 0;
  font-size: 1.2rem;
  line-height: 1.4;
  font-weight: 400;
  text-align: left;
  word-break: break-word; //  단어가 말풍선 너비를 초과할 때 줄바꿈을 자동으로 처리!
`;
