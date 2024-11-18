import * as S from "./Main.styled";

import { Header } from "@components/header/Header";
import { BottomNavigation } from "@components/common/bottomNavigation/BottomNavigation";
import CloseWork from "@components/workMainPageComponent/closeWork/CloseWork";
export const Main = () => {
  const panelsData = [
    {
      imageSrc: "/images/work1.png",
      title: "이틀동안 강아지 돌봐주실 분",
      subtitle: "가족이 다 여행을 가서 집이 이틀동안 비...",
      distance: "600m",
    },
    {
      imageSrc: "/images/work2.png",
      title: "공원 청소 6분 모집합니다",
      subtitle: "공원 관리 6분 추가 모집합니다. 지원부탁...",
      distance: "600m",
    },
    {
      imageSrc: "/images/work3.png",
      title: "헬스장 전달지 나눠주실 분",
      subtitle: "1시간만 전달지 나눠주실 분",
      distance: "600m",
    },
    {
      imageSrc: "/images/work4.png",
      title: "청소 도우미 모집",
      subtitle: "아파트 앞 청소 부탁드려요",
      distance: "600m",
    },
    {
      imageSrc: "/images/work1.png",
      title: "이틀동안 강아지 돌봐주실 분",
      subtitle: "가족이 다 여행을 가서...",
      distance: "600m",
    },
    {
      imageSrc: "/images/work2.png",
      title: "공원 청소 6분 모집합니다",
      subtitle: "공원 관리 6분 추가 모집합니다...",
      distance: "600m",
    },
    {
      imageSrc: "/images/work3.png",
      title: "헬스장 전달지 나눠주실 분",
      subtitle: "1시간만 전달지 나눠주실 분",
      distance: "600m",
    },
    {
      imageSrc: "/images/work4.png",
      title: "청소 도우미 모집",
      subtitle: "아파트 앞 청소 부탁드려요",
      distance: "600m",
    },
    {
      imageSrc: "/images/work1.png",
      title: "이틀동안 강아지 돌봐주실 분",
      subtitle: "가족이 다 여행을 가서...",
      distance: "600m",
    },
    {
      imageSrc: "/images/work2.png",
      title: "공원 청소 6분 모집합니다",
      subtitle: "공원 관리 6분 추가 모집합니다...",
      distance: "600m",
    },
    {
      imageSrc: "/images/work3.png",
      title: "헬스장 전달지 나눠주실 분",
      subtitle: "1시간만 전달지 나눠주실 분",
      distance: "600m",
    },
    {
      imageSrc: "/images/work4.png",
      title: "청소 도우미 모집",
      subtitle: "아파트 앞 청소 부탁드려요",
      distance: "600m",
    },
  ];
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
      <S.WorkTitle>지금 할 수 있는 소일거리</S.WorkTitle>
      <CloseWork panelsData={panelsData} />
      <BottomNavigation />
    </S.Layout>
  );
};
