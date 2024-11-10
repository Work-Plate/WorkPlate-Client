/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const StyledText = styled.span`
  font-family: "Arial", sans-serif;
  font-size: ${({ size }) => size || "16px"};
  color: ${({ color }) => color || "#333"};
  font-weight: ${({ weight }) => weight || "normal"};
  text-align: ${({ align }) => align || "left"};
  line-height: ${({ lineHeight }) => lineHeight || "1.5"}; //줄간격
  margin: ${({ margin }) => margin || "0"};
`;
