/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  width: 100%;
  aspect-ratio: 15 / 2;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.1);
  box-sizing: border-box; // padding이 내부에 포함되도록 설정
`;

export const Title = styled.h1`
  font-size: 20px;
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
  width: 3vw;
  height: 3vw;
`;
