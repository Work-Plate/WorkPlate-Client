/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  background-color: white;

  justify-content: space-between;
  padding: 2rem;
  box-shadow: 0rem 0.3rem 0.3rem rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 520px;
  height: 2.625rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
`;

export const Title = styled.h1`
  padding: 0;
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
