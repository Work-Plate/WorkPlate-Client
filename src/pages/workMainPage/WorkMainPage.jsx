import * as S from "./WorkMainPage.styled";
import SubHeader from "@components/common/subheader/SubHeader";
import { BottomNavigation } from "@components/common/bottomNavigation/BottomNavigation";
import Text from "@components/common/text/Text";
import Typewriter from "typewriter-effect";
import CloseWork from "@components/workMainPageComponent/closeWork/CloseWork";
import PopularWork from "@components/workMainPageComponent/popularWork/PopularWork";

export const WorkMainPage = () => {
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

  return (
    <>
      <S.Layout>
        <BottomNavigation />
        <SubHeader
          title="소일거리"
          showLeftButton={true}
          leftLink="/"
          showRightButton={true}
          rightLink="/"
          rightIcon="/icons/x.svg"
        />

        <Text
          size="1.3rem"
          color="#0C0E27"
          weight="400"
          align="left"
          margin="0.4rem 0 0 1rem"
        >
          <Typewriter
            options={{
              autoStart: true,
              loop: false,
              delay: 100,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "어떤 일이든 몸을 너무 무리하지<br>않도록 선택해보세요."
                )
                .start();
            }}
          />
        </Text>
        <Text
          size="1.4rem"
          color="#0C0E27"
          weight="700"
          align="left"
          margin="0.4rem  0 0 1rem"
        >
          {sessionStorage.getItem("name") || "guest"}님
        </Text>
        <Text
          size="1.5rem"
          color="#0C0E27"
          weight="700"
          align="left"
          margin="2rem 0 0 1rem"
        >
          30분 거리에 있는 소일거리 🏃
        </Text>
        <CloseWork panelsData={panelsData} />
        <Text
          size="1.5rem"
          color="#0C0E27"
          weight="700"
          align="left"
          margin="2rem 0 0 1rem"
        >
          {sessionStorage.getItem("name") || "guest"}님을 위한 추천 소일거리 👍
        </Text>
        <PopularWork imageUrls={recommendImageUrls} />
        <Text
          size="1.5rem"
          color="#0C0E27"
          weight="700"
          align="left"
          margin="2rem 0 0 1rem"
        >
          지금 가장 인기 있는 소일거리 😎
        </Text>
        <PopularWork imageUrls={popularImageUrls} />
      </S.Layout>
    </>
  );
};
