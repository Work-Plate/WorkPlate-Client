import * as S from "./OnBoarding.styled";
import { ProgressBar } from "@components/progressBar/ProgressBar";
import { BackNavigation } from "./_components/BackNavigation";
import { NextButton } from "./_components/NextButton";
import { useState } from "react";

export const OnBoarding0 = () => {
  const [active, setActive] = useState(false);

  const handleChange = (e) => {
    if (e.target.value) {
      setActive(true);
      sessionStorage.setItem("name", e.target.value);
      console.log(e.target.value);
    } else {
      setActive(false); // 입력 값이 지워졌을 때 비활성화
    }
  };

  return (
    <S.Wrapper>
      <BackNavigation />
      <ProgressBar $now={1} />
      <S.TitleWrapper>
        <S.MainTitle>이름을 입력해주세요.</S.MainTitle>
      </S.TitleWrapper>
      <S.NameInput
        onChange={handleChange} // 이벤트 핸들러 직접 전달
        placeholder="이름을 입력해주세요."
      />
      <NextButton isActive={active} next={"navigate"} now={0} />
    </S.Wrapper>
  );
};
