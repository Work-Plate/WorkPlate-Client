import styled from "@emotion/styled";

export const PanelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* 텍스트와 이미지를 양쪽에 배치 */
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 100px;
  height: 90%;
  overflow: hidden;
  border-radius: 8px;
  margin-left: 12px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
