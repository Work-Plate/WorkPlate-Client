import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 2.6rem;
  padding: 2rem 0.5rem;
  display: flex;
  align-items: center;
`;

export const BackNavigation = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <img
        src="/images/left.svg"
        width="32px"
        alt="뒤로가기"
        onClick={() => navigate(-1)}
      />
    </Wrapper>
  );
};
