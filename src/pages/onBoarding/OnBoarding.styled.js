import styled from "@emotion/styled";

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  gap: 30px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  justify-content: center;
  /* align-items: center; */
`;

export const MainTitle = styled.p`
  color: var(--gray-1000, #0c0e27);
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.56px;
`;

export const BoxContainer = styled.div`
  width: 95%;
  display: flex;
  gap: 1rem;
`;

export const GenderBox = styled.div`
  width: calc(50% - 0.5rem);
  height: 6.25rem;
  padding: 2.5rem 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.25rem;

  background-color: ${({ $isClicked }) => ($isClicked ? "#FFF3ED" : "#F5F6F9")};
  border: ${({ $isClicked }) =>
    $isClicked ? "1px solid FF854C" : "1px solid #EEE"};
  color: ${({ $isClicked }) => ($isClicked ? "#FF854C" : "#707E86")};
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 1rem;
  gap: 20px;
  margin-bottom: 10rem;
`;

export const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
