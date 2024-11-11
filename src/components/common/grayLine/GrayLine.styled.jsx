import styled from "@emotion/styled";

export const GrayLine = styled.div`
  width: ${({ width }) => width || "100%"};
  border-bottom: ${({ thickness }) => thickness || "1px"} solid #eeeeee;
  margin: ${({ margin }) => margin || "0px"} auto;
`;
