import { useState, useEffect } from "react";
import * as S from "./BottomNavigation.styled";
import { useLocation, useNavigate } from "react-router-dom";

const NAVIGATION_NAME = ["홈", "소일거리", "밥상", "QR 결제"];

export const BottomNavigation = () => {
  const [activePageNumber, setActivePageNumber] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const handleMove = (index) => {
    if (index === 0) {
      navigate("/main");
    } else if (index === 1) {
      navigate("/work");
    } else if (index === 2) {
      navigate("/food");
    } else {
      navigate("/main");
      // 수정예정
    }
  };

  useEffect(() => {
    if (location.pathname === "/main") {
      setActivePageNumber(0);
    } else if (location.pathname === "/work") {
      setActivePageNumber(1);
    } else if (location.pathname === "/food") {
      setActivePageNumber(2);
    } else {
      setActivePageNumber(3);
    }
  }, [location]);

  return (
    <S.Wrapper>
      {NAVIGATION_NAME.map((text, index) => (
        <S.NavigationBtn
          key={index}
          $isActive={activePageNumber === index}
          onClick={() => handleMove(index)}
        >
          <S.BtnImage src={`/images/navtionImage${index + 1}.svg`} />
          <S.NavigationBtnName $isActive={activePageNumber === index}>
            {text}
          </S.NavigationBtnName>
        </S.NavigationBtn>
      ))}
    </S.Wrapper>
  );
};
