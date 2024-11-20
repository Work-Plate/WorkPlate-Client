import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;

  height: 6px;
  width: 95%;
  max-width: 510px;
`;

export const Progress = styled.div`
  height: 100%;
  width: ${({ $total, $now }) => `calc(${Math.min($now / $total, 1) * 100}%)`};
  background-color: #ff854c;
`;

export const NonProgress = styled.div`
  height: 100%;
  width: ${({ $total, $now }) =>
    `calc(${100 - Math.min($now / $total, 1) * 100}%)`};
  background-color: #fff3ed;
`;
