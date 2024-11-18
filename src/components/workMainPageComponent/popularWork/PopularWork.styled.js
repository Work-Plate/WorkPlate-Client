import styled from "@emotion/styled";

export const ScrollContainer = styled.div`
  overflow-x: auto;
  padding: 1rem;
  white-space: nowrap; // 세로 스크롤 방지
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr); // 가로로 8개
  grid-template-rows: repeat(2, auto); // 세로로 2개
  gap: 8px;
  width: max-content;
`;

export const ImageWrapper = styled.div`
  width: 20rem;
  height: 13rem;
  overflow: hidden;
  border-radius: 8px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
