/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 1rem 1.5rem 1rem;
  box-shadow: 0rem 0.3rem 0.3rem rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

export const Title = styled.h1`
  padding: 0.5rem 0 0 0;
  font-size: 1.4rem;
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
  width: 1.5rem;
  height: 1.5rem;
`;
