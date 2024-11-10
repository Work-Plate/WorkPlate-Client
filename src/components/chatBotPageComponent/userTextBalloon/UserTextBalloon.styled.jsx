/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const BalloonContainer2 = styled.div`
  display: flex;
  justify-content: flex-end; // 오른쪽
  padding: 5vw 4vw 0 0;
`;

export const Balloon = styled.div`
  max-width: 90%;
  background-color: #f5f6f9;
  color: #333;
  padding: 2.5vw 4.5vw 1.7vw 4vw;
  border-radius: 5vw;
  border-bottom-right-radius: 0;
  font-size: 4.5vw;
  line-height: 1.4;
  font-weight: 400;
  text-align: left;
  word-break: break-word; //  단어가 말풍선 너비를 초과할 때 줄바꿈을 자동으로 처리!
`;
