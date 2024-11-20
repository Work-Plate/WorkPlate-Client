/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const FoodCardContainer = styled.button`
  width: 90%;
  margin: 0.6rem auto;
  aspect-ratio: 10/6.5;
  background-image: ${({ imageSrc }) =>
    `url(${imageSrc})`}; // 동적으로 이미지 설정
  background-size: cover;
  background-position: center;
  border: none;
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
`;
