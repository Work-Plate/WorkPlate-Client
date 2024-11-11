import * as S from "./Main.styled";

import { Header } from "@components/header/Header";
import { BottomNavigation } from "@components/common/bottomNavigation/BottomNavigation";
export const Main = () => {
  return (
    <S.Layout>
      <Header />

      <BottomNavigation />
    </S.Layout>
  );
};
