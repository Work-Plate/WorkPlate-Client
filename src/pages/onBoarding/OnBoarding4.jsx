import * as S from "./OnBoarding.styled";
import { BackNavigation } from "./_components/BackNavigation";
import { ProgressBar } from "@components/progressBar/ProgressBar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const QUESTIONS = [
  {
    id: "Q01",
    text: "지난 7일간 나는 모든 일들을 힘들게 느꼈나요?",
    options: ["1", "2", "3", "4"],
    levels: ["극히 드물다", "대부분 그랬다"],
  },
  {
    id: "Q02",
    text: "보조기구나 타인의 도움 없이 혼자서 쉬지 않고 10개의 계단을 오르는데 힘이 드나요?",
    options: ["예", "아니오"],
  },
  {
    id: "Q03",
    text: "운동장 한 바퀴(400m)정도 걷기를 할 수 있습니까?",
    options: ["1", "2", "3", "4"],
    levels: ["할 수 없다.", "어렵지 않다."],
  },
  {
    id: "Q04",
    text: "지난 7일간 중간 강도의 신체활동이나 격렬한 활동을 1회 이상 하였습니까?",
    options: ["예", "아니오"],
  },
  {
    id: "Q05",
    text: "작년 체중에 비해 1년 동안 4.5kg 이상 감소하였습니까?",
    options: ["예", "아니오"],
  },
];

export const OnBoarding4 = () => {
  const navigate = useNavigate();

  const [selectedAnswers, setSelectedAnswers] = useState({}); // 각 질문의 선택된 답변 저장
  const [active, setActive] = useState(false); // '다음으로' 버튼 활성화 여부

  // 모든 질문에 답변이 선택되었는지 확인
  useEffect(() => {
    const allAnswered = QUESTIONS.every(
      (question) => selectedAnswers[question.id]
    );
    setActive(allAnswered);
  }, [selectedAnswers]);

  // 특정 질문에 대한 답변 선택 핸들러
  const handleOptionClick = (questionId, option) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  return (
    <S.Wrapper>
      <BackNavigation />
      <ProgressBar $now={4} />
      <S.TitleWrapper>
        <S.MainTitle>{localStorage.getItem("name")}의</S.MainTitle>
        <S.MainTitle>건강 상태를 알려주세요.</S.MainTitle>
      </S.TitleWrapper>

      {QUESTIONS.map((question) => (
        <S.QuestionWrapper key={question.id}>
          <S.QuestionTop>
            <S.QuestionNumber>{question.id}</S.QuestionNumber>
            <S.QuestionText>{question.text}</S.QuestionText>
          </S.QuestionTop>
          <S.QuestionButtonWrapper>
            {question.options.map((option) => (
              <S.QuestionButton
                key={option}
                $isClicked={selectedAnswers[question.id] === option}
                onClick={() => handleOptionClick(question.id, option)}
              >
                {option}
              </S.QuestionButton>
            ))}
          </S.QuestionButtonWrapper>
          {question.levels && (
            <S.QuestionLevelTextWrapper>
              <S.QuestionLevelText>{question.levels[0]}</S.QuestionLevelText>
              <S.QuestionLevelText>{question.levels[1]}</S.QuestionLevelText>
            </S.QuestionLevelTextWrapper>
          )}
        </S.QuestionWrapper>
      ))}

      <S.FinishBtn
        disabled={!active}
        $isActive={active}
        onClick={() => {
          navigate("/main");
        }}
      >
        다음으로
      </S.FinishBtn>
    </S.Wrapper>
  );
};
