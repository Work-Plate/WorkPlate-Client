import * as S from "./BottomNavigation.styled";

const NAVIGATION_NAME = ["홈", "소일거리", "밥상", "내 정보"];

export const BottomNavigation = () => {
  return (
    <S.Wrapper>
      {NAVIGATION_NAME.map((text, index) => (
        <S.NavigationBtn key={index}>
          <S.BtnImage src={`/images/navtionImage${index + 1}.svg`} />
          <S.NavigationBtnName>{text}</S.NavigationBtnName>
        </S.NavigationBtn>
      ))}
    </S.Wrapper>
  );
};
