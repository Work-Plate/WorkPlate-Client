import * as S from "./Main.styled";

import { Header } from "@components/header/Header";
import { BottomNavigation } from "@components/common/bottomNavigation/BottomNavigation";
import CloseWork from "@components/workMainPageComponent/closeWork/CloseWork";
import ChatbotInButton from "../../components/chatBotPageComponent/chatbotInButton/ChatbotInButton";
import { useNavigate } from "react-router-dom";
export const Main = () => {
  const panelsData = [
    {
      imageSrc: "/images/work/work1.png",
      title: "이틀동안 강아지 돌봐주실 분",
      subtitle: "가족이 다 여행을 가서 집이 이틀동안 비...",
      distance: "600m",
    },
    {
      imageSrc: "/images/work/work2.png",
      title: "공원 청소 6분 모집합니다",
      subtitle: "공원 관리 6분 추가 모집합니다. 지원부탁...",
      distance: "600m",
    },
    {
      imageSrc: "/images/work/work3.png",
      title: "헬스장 전달지 나눠주실 분",
      subtitle: "1시간만 전달지 나눠주실 분",
      distance: "600m",
    },
    {
      imageSrc: "/images/work/work4.png",
      title: "청소 도우미 모집",
      subtitle: "아파트 앞 청소 부탁드려요",
      distance: "600m",
    },
    {
      imageSrc: "/images/work/work5.png",
      title: "이틀동안 강아지 돌봐주실 분",
      subtitle: "가족이 다 여행을 가서...",
      distance: "600m",
    },
    {
      imageSrc: "/images/work/work6.png",
      title: "공원 청소 6분 모집합니다",
      subtitle: "공원 관리 6분 추가 모집합니다...",
      distance: "600m",
    },
    {
      imageSrc: "/images/work/work7.png",
      title: "헬스장 전달지 나눠주실 분",
      subtitle: "1시간만 전달지 나눠주실 분",
      distance: "600m",
    },
    {
      imageSrc: "/images/work/work8.png",
      title: "청소 도우미 모집",
      subtitle: "아파트 앞 청소 부탁드려요",
      distance: "600m",
    },
  ];
  const recommendImageUrls = [
    "/images/recommendWork/recommendWork1.png",
    "/images/recommendWork/recommendWork2.png",
    "/images/recommendWork/recommendWork3.png",
    "/images/recommendWork/recommendWork4.png",
    "/images/recommendWork/recommendWork5.png",
    "/images/recommendWork/recommendWork6.png",
    "/images/recommendWork/recommendWork7.png",
    "/images/recommendWork/recommendWork8.png",
    "/images/recommendWork/recommendWork9.png",
    "/images/recommendWork/recommendWork10.png",
    "/images/recommendWork/recommendWork11.png",
    "/images/recommendWork/recommendWork12.png",
    "/images/recommendWork/recommendWork13.png",
    "/images/recommendWork/recommendWork14.png",
    "/images/recommendWork/recommendWork15.png",
    "/images/recommendWork/recommendWork16.png",
  ];
  const popularImageUrls = [
    "/images/popularWork/popularWork1.png",
    "/images/popularWork/popularWork2.png",
    "/images/popularWork/popularWork3.png",
    "/images/popularWork/popularWork4.png",
    "/images/popularWork/popularWork5.png",
    "/images/popularWork/popularWork6.png",
    "/images/popularWork/popularWork7.png",
    "/images/popularWork/popularWork8.png",
    "/images/popularWork/popularWork9.png",
    "/images/popularWork/popularWork10.png",
    "/images/popularWork/popularWork11.png",
    "/images/popularWork/popularWork12.png",
    "/images/popularWork/popularWork13.png",
    "/images/popularWork/popularWork14.png",
    "/images/popularWork/popularWork15.png",
    "/images/popularWork/popularWork16.png",
  ];
  const navigate = useNavigate();
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
          <S.MainBox $background={"#FF9B5C"} onClick={() => navigate("/work")}>
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
          <S.MainBox $background={"#FF854C"} onClick={() => navigate("/food")}>
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
        <S.qrButton onClick={() => navigate("/qr")}>
          QR 코드로 결제하기
        </S.qrButton>
      </S.MainContainer>
      <S.WorkTitle>지금 할 수 있는 소일거리</S.WorkTitle>
      <CloseWork panelsData={panelsData} />
      <ChatbotInButton />
      <BottomNavigation />
    </S.Layout>
  );
};
