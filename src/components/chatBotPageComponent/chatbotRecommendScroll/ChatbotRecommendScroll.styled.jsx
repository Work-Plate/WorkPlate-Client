import styled from "@emotion/styled";

export const ScrollContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  overflow-x: auto;
  margin-top: 3vw;
  margin-left: 1rem;
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
  width: 15rem;

  background-color: #fff; 
  flex-shrink: 0;
  scroll-snap-align: start; // 스크롤 시 카드가 시작점에 맞춰지도록 설정
  display: flex;
  flex-direction: column; // 내부 요소를 세로 정렬

  justify-content: center; 
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }
`;
