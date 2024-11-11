import styled from "@emotion/styled";

export const ScrollContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  overflow-x: auto;
  margin-top: 3vw;
  margin-left: 4.5vw;
  gap: 4.5vw;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch; // iOS에서 부드러운 스크롤 지원

  // 스크롤바 숨기기
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */
`;

export const ImageCard = styled.div`
  width: 65vw;
  background-color: transparent;
  flex-shrink: 0;
  scroll-snap-align: start; // 스크롤 시 카드가 시작점에 맞춰지도록 설정
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;
