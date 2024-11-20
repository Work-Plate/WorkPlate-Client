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

export const QuestionWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 16px;
  flex-direction: column;
  align-items: flex-start;
`;

export const QuestionTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  width: 100%;
  margin-bottom: 20px;
`;

export const QuestionNumber = styled.div`
  display: flex;
  padding: 4px 12px;
  gap: 4px;
  border-radius: 20px;
  background: var(--gray-200, #eee);
  color: var(--gray-900, #415058);
  /* Title3/Medium */
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const QuestionText = styled.p`
  color: var(--gray-1000, #0c0e27);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 135%; /* 24.3px */
  letter-spacing: -0.36px;
  padding: 0 0.25rem;
`;

export const QuestionButtonWrapper = styled.div`
  width: 100%;
  align-items: center;
  gap: 16px;
  display: flex;
`;

export const QuestionButton = styled.button`
  display: flex;
  padding: 16px 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  margin-bottom: 10px;
  border-radius: 20px;
  border: ${({ $isClicked }) =>
    $isClicked ? "1px solid #FF854C" : "1px solid #eee"};
  background: ${({ $isClicked }) => ($isClicked ? "#FFF3ED" : "#f5f6f9")};
  color: ${({ $isClicked }) => ($isClicked ? "#FF854C" : "#707E86")};
`;

export const QuestionLevelTextWrapper = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

export const QuestionLevelText = styled.p`
  color: var(--gray-800, #707e86);
  /* Button/Small */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const FinishBtn = styled.button`
  width: 95%;
  max-width: 494px;
  height: 4rem;

  padding: 1rem 0;
  border-radius: 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isActive }) => ($isActive ? "#FF854C" : "#F5F6F9")};
  color: ${({ $isActive }) => ($isActive ? "white" : "#CCC")};
  cursor: pointer;
  margin-top: 4rem;
  margin-bottom: 2rem;
`;

export const NameInput = styled.input`
  display: flex;
  width: 90%;
  padding: 10px;
  align-items: center;
  gap: 10px;
  border: none;
  border-bottom: 2px solid var(--gray-200, #eee);
  color: black;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  &::placeholder {
    color: var(--gray-300, #ccc);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;
