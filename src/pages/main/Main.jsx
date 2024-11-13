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
      </S.MainContainer>
      <BottomNavigation />
    </S.Layout>
  );
};
