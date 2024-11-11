/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* padding: 8vh 3vw 3.5vh 3vw; */
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

export const Title = styled.h1`
  /* padding: 0.5vw 0 0 0;
  font-size: 5vw; */
  font-weight: bold;
  color: #333;
  text-align: center;
  flex: 1;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;

  &:disabled {
    cursor: default;
  }
`;

export const Icon = styled.img`
  /* width: 5vw;
  height: 5vw; */
`;
