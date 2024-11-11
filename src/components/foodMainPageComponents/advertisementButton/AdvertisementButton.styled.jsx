/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const AdvertisementButtonContainer = styled.button`
  width: calc(100% - 2rem); /* 양쪽 2rem 마진을 고려한 너비 */
  margin: 1rem 1rem 0 1rem; /* 양 옆은 2rem, 위와 아래는 0 */
  aspect-ratio: 10 / 2;
  background-image: url("/foodMainImage/advertisement.svg");
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
