import * as S from "./Main.styled";

import { Header } from "@components/header/Header";
import { BottomNavigation } from "@components/common/bottomNavigation/BottomNavigation";
export const Main = () => {
  return (
    <>
      <S.Layout>
        <Header />
        <div
          style={{
            padding: "1rem",
            margin: "1rem 0",
          }}
        >
          메인이지롱
        </div>
        <BottomNavigation />
      </S.Layout>
    </>
  );
};
