import * as S from "./OnBoarding.styled";
import { ProgressBar } from "@components/progressBar/ProgressBar";
import { BackNavigation } from "./_components/BackNavigation";
import { NextButton } from "./_components/NextButton";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { DatePicker } from "./_components/DatePicker";

const MOCK_NAME = "홍길동";

export const OnBoarding = () => {
  const params = useParams();
  const [isClicked, setClicked] = useState(null);
  const [next, setNext] = useState("change");
  const [startDate, setStartDate] = useState(new Date());
  return (
    <S.Wrapper>
      <BackNavigation />
      <ProgressBar $now={Number(params.pageNumber)} />
      <S.TitleWrapper>
        <S.MainTitle>{MOCK_NAME}님의</S.MainTitle>
        {next === "change" ? (
          <S.MainTitle>성별을 알려주세요</S.MainTitle>
        ) : (
          <S.MainTitle>생년월일을 선택해주세요</S.MainTitle>
        )}
      </S.TitleWrapper>
      {next === "change" ? (
        <S.BoxContainer>
          <S.GenderBox
            $isClicked={isClicked === "female"}
            onClick={() => setClicked("female")}
          >
            여성
          </S.GenderBox>
          <S.GenderBox
            $isClicked={isClicked === "male"}
            onClick={() => setClicked("male")}
          >
            남성
          </S.GenderBox>
        </S.BoxContainer>
      ) : (
        <DatePicker startDate={startDate} setStartDate={setStartDate} />
      )}

      <NextButton
        isActive={isClicked || false}
        setNextAction={setNext}
        next={next}
      />
    </S.Wrapper>
  );
};
