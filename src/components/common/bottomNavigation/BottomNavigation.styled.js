import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 1rem;
  width: 100%;
  height: 2rem;
  max-width: 520px;
  padding-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
`;

export const NavigationBtn = styled.div`
  display: flex;
  width: 4.125rem;
  padding: 10px 0px;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`;

export const BtnImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const NavigationBtnName = styled.p`
  color: #707e86;
  text-align: center;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
