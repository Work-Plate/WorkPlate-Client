import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  gap: 1.5rem;
`;

export const BackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const BackText = styled.p`
  color: var(--gray-900, #415058);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: none;
  text-decoration-thickness: auto;
  text-underline-offset: auto;
  text-underline-position: from-font;
`;

export const QRWrapper = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  gap: 20px;
  border-radius: 4rem;
  border: 2px solid #ccc;
`;

export const QR = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <img src="/images/qr.png" alt="QR 이미지" width="90%" />
      <BackWrapper>
        <QRWrapper onClick={() => navigate(-1)}>
          <img src="/images/qrBack.svg" alt="QR 뒤로가기" />
        </QRWrapper>
        <BackText onClick={() => navigate(-1)}>이전 화면으로 돌아가기</BackText>
      </BackWrapper>
    </Wrapper>
  );
};
