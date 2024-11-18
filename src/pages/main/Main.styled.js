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
  margin-top: 1.5rem;

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

export const MainBoxWrapper = styled.div`
  display: flex;
  height: 120px;
  gap: 1rem;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const MainBox = styled.div`
  background: ${({ $background }) => $background};
  border-radius: 10px;
  height: 100%;
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MainBoxFirstWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  padding: 1rem 0 0 1rem;
  justify-content: center;
`;

export const MainBoxSecondWrapper = styled.div`
  display: flex;
  justify-content: end;
  padding: 0 1rem 1rem 0;
`;

export const qrButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: calc(90% + 1rem);
  padding: 1rem 2.5rem;
  background-color: #415058;
  color: white;

  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const MainBoxText1 = styled.p`
  color: white;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const MainBoxText2 = styled.p`
  color: white;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.48px;
`;
