import styled from "@emotion/styled";

export const Layout = styled.div`
  min-height: 120vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem 0;
`;

export const MainContainer = styled.div`
  width: 90%;
  padding: 1rem;
  border-radius: 0.625rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  background-color: #f5f6f9;
`;

export const TextWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
`;

export const BodyText = styled.p`
  ${({ theme }) => theme.fonts.body1};
  color: ${({ theme }) => theme.colors.deepOrange};
  margin-right: 0.5rem;
`;

export const Title1 = styled.p`
  ${({ theme }) => theme.fonts.title1};
`;

export const Title2 = styled.p`
  ${({ theme }) => theme.fonts.title2};
`;
