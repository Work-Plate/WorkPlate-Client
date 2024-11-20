import * as S from "./OnBoarding.styled";
import { ProgressBar } from "@components/progressBar/ProgressBar";
import { BackNavigation } from "./_components/BackNavigation";
import { NextButton } from "./_components/NextButton";
import { CommonButton } from "./_components/CommonButton";
import { useEffect, useState } from "react";

const BTN_DATA = [
  "🍳 요리·서빙",
  "🏢 건설·토목·노무",
  "⚙️ 생산·기술",
  "📦 운전·배달·물류",
  "🤝 서비스",
  "🛒 유통·판매",
  "🍿 문화·여가·생활",
  "🖥️ 사무·회계·IT",
  "📞 영업·상담",
  "🩺 요양·간호·의료",
  "🎓 교육·강사",
  "👨‍🌾 농업",
];

export const OnBoarding2 = () => {
  const [next, setNext] = useState("navigate");
  const [active, setActive] = useState(false);
  const [expData, setExpData] = useState(() => {
    // `localStorage` 초기 데이터 로드
    const storedData = localStorage.getItem("exp");
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    // `expData`가 업데이트될 때 버튼 활성화 여부 확인
    setActive(expData.length > 0);
  }, [expData]);

  const handleButtonClick = (buttonText) => {
    setExpData((prevData) => {
      const updatedData = prevData.includes(buttonText)
        ? prevData.filter((item) => item !== buttonText)
        : [...prevData, buttonText];

      // `localStorage` 업데이트
      localStorage.setItem("exp", JSON.stringify(updatedData));
      return updatedData;
    });
  };

  return (
    <S.Wrapper>
      <BackNavigation />
      <ProgressBar $now={2} />
      <S.TitleWrapper>
        <S.MainTitle>{localStorage.getItem("name")}님의</S.MainTitle>
        <S.MainTitle>경험을 알려주세요</S.MainTitle>
      </S.TitleWrapper>
      <S.ButtonContainer>
        {BTN_DATA.reduce((rows, buttonText, index) => {
          if (index % 2 === 0) {
            rows.push([buttonText]);
          } else {
            rows[rows.length - 1].push(buttonText);
          }
          return rows;
        }, []).map((row, rowIndex) => (
          <S.ButtonRow key={rowIndex}>
            {row.map((buttonText, index) => (
              <CommonButton
                key={index}
                isActive={expData.includes(buttonText)} // 버튼 활성화 여부
                onClick={() => handleButtonClick(buttonText)}
                setActive={setActive}
              >
                {buttonText}
              </CommonButton>
            ))}
          </S.ButtonRow>
        ))}
      </S.ButtonContainer>
      <NextButton
        isActive={active}
        setNextAction={setNext}
        next={next}
        now={2}
      />
    </S.Wrapper>
  );
};
