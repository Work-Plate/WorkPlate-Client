import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  min-height: 70vh;
  width: 100%;

  background-image: url("images/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  /* background-position: center; */
`;

export const Wrapper = styled.div`
  min-height: 30vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-direction: column;
`;

export const TextWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 0 20px;
  margin-bottom: 1.5rem;
`;

export const MainTextOrange = styled.p`
  color: #ff854c;
  /* Display1 */
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 43.2px */
  letter-spacing: -0.64px;
`;

export const MainTextBlack = styled.p`
  color: black;
  /* Display1 */
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 135%; /* 43.2px */
  letter-spacing: -0.64px;
`;

export const SubText = styled.p`
  color: var(--gray-800, #707e86);
  /* Body1/Reading */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 165%; /* 26.4px */
  letter-spacing: -0.32px;
`;

export const SignUpButton = styled.button`
  display: flex;
  width: 80%;
  height: 4rem;
  padding: 1rem 40px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #ff854c;
  margin-bottom: 1rem;
  color: #fff;
  text-align: center;
  /* Button/Large */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

export const LoginButton = styled.button`
  display: flex;
  width: 80%;
  height: 4rem;
  padding: 1rem 40px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid var(--gray-300, #ccc);

  margin-bottom: 2rem;
  color: #707e86;
  text-align: center;
  /* Button/Large */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

export const Intro = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <ImageWrapper />
      <Wrapper>
        <TextWrapper>
          <MainTextOrange>새로운 일과 한끼의 기쁨</MainTextOrange>
          <MainTextBlack>밥상일터와 함께해요!</MainTextBlack>
        </TextWrapper>
        <TextWrapper>
          <SubText>간단한 매칭으로 적합한 일자리를 찾고,</SubText>
          <SubText>할인된 식사로 생활의 여유를 더하세요.</SubText>
        </TextWrapper>
        <SignUpButton onClick={() => navigate("/onboarding/1")}>
          회원가입
        </SignUpButton>
        <LoginButton onClick={() => navigate("/main")}>로그인</LoginButton>
      </Wrapper>
    </Layout>
  );
};
