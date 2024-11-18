import * as S from "./Main.styled";

import { Header } from "@components/header/Header";
import { BottomNavigation } from "@components/common/bottomNavigation/BottomNavigation";
export const Main = () => {
  return (
    <S.Layout>
      <Header />
      <S.MainContainer>
        <S.TextWrapper>
          <S.BodyText>내 엽전</S.BodyText>
          <S.Title1>15</S.Title1>
          <S.Title2>개</S.Title2>
        </S.TextWrapper>
        <S.MainBoxWrapper>
          <S.MainBox $background={"#FF9B5C"}>
            <S.MainBoxFirstWrapper>
              <S.MainBoxText1>일거리 찾기</S.MainBoxText1>
              <S.MainBoxText2>소일거리</S.MainBoxText2>
            </S.MainBoxFirstWrapper>
            <S.MainBoxSecondWrapper>
              <img
                src="/images/luggage-03.svg"
                alt="서류 가방"
                width={"32px"}
                height={"32px"}
              />
            </S.MainBoxSecondWrapper>
          </S.MainBox>
          <S.MainBox $background={"#FF854C"}>
            <S.MainBoxFirstWrapper>
              <S.MainBoxText1>식당 찾기</S.MainBoxText1>
              <S.MainBoxText2>밥상</S.MainBoxText2>
            </S.MainBoxFirstWrapper>
            <S.MainBoxSecondWrapper>
              <img
                src="/images/cutlery-02.svg"
                alt="숟가락과 포크"
                width={"32px"}
                height={"32px"}
              />
            </S.MainBoxSecondWrapper>
          </S.MainBox>
        </S.MainBoxWrapper>
        <S.qrButton>QR 코드로 결제하기</S.qrButton>
      </S.MainContainer>
      <BottomNavigation />
    </S.Layout>
  );
};
