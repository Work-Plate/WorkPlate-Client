import * as S from "./OnBoarding.styled";
import { ProgressBar } from "@components/progressBar/ProgressBar";
import { BackNavigation } from "./_components/BackNavigation";
import { NextButton } from "./_components/NextButton";
import { CommonButton } from "./_components/CommonButton";
import { useState, useEffect } from "react";

const BTN_DATA = [
  "🧑‍🤝‍🧑 사람을 많이 만나는 업무",
  "🧑‍💻️ 혼자 하는 업무",
  "🌳 실외업무",
  "📂 실내업무",
  "🏃‍♂️ 활동적",
  "🎨 창의적",
  "💡 기술적",
  "기타",
];

export const OnBoarding3 = () => {
  const [active, setActive] = useState(false); // 다음 버튼 활성화 상태
  const [expData, setExpData] = useState(() => {
    const storedData = sessionStorage.getItem("want");
    return storedData ? JSON.parse(storedData) : [];
  });

  // `expData`가 업데이트될 때 버튼 활성화 여부 확인
  useEffect(() => {
    if (expData.length > 0) {
      setActive(true);
    }
  }, [expData]);

  const handleButtonClick = (buttonText) => {
    setExpData((prevData) => {
      const updatedData = prevData.includes(buttonText)
        ? prevData.filter((item) => item !== buttonText)
        : [...prevData, buttonText];

      // `sessionStorage` 업데이트
      sessionStorage.setItem("want", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  return (
    <S.Wrapper>
      <BackNavigation />
      <ProgressBar $now={3} />
      <S.TitleWrapper>
        <S.MainTitle>{sessionStorage.getItem("name")}님이 원하시는</S.MainTitle>
        <S.MainTitle>직무를 알려주세요.</S.MainTitle>
      </S.TitleWrapper>
      <S.ButtonContainer>
        {BTN_DATA.reduce((rows, buttonText, index) => {
          // 2개씩 버튼을 묶어서 행으로 나누기
          if (index % 2 === 0) {
            rows.push([buttonText]);
          } else {
            rows[rows.length - 1].push(buttonText);
          }
          return rows;
        }, []).map((row, rowIndex) => (
          <S.ButtonRow key={rowIndex}>
            {row.map((buttonText) => (
              <CommonButton
                key={buttonText}
                isActive={expData.includes(buttonText)} // 버튼 활성화 여부
                onClick={() => handleButtonClick(buttonText)}
                setActive={setActive}
                type="want"
              >
                {buttonText}
              </CommonButton>
            ))}
          </S.ButtonRow>
        ))}
      </S.ButtonContainer>
      <NextButton isActive={active} next={"navigate"} now={3} />
    </S.Wrapper>
  );
};
