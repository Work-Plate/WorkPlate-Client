import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;

export const LoadMoreButton = styled.button`
  width: 100%;
  aspect-ratio: 10/1.4;
  padding: 12px;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  background-color: #fffff;
  color: #666;
  font-size: 1.1rem;
  cursor: pointer;
  text-align: center;
  &:active {
    background-color: #e0e0e0;
  }
`;
