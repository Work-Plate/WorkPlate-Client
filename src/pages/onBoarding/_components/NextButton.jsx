import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";

const Button = styled.button`
  width: 95%;
  max-width: 494px;
  height: 4rem;
  position: fixed;
  bottom: 2rem;
  padding: 1rem 0;
  border-radius: 0.625rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $isActive }) => ($isActive ? "#FF854C" : "#F5F6F9")};
  color: ${({ $isActive }) => ($isActive ? "white" : "#CCC")};
  cursor: pointer;
`;

export const NextButton = ({ isActive = false, setNextAction, next, now }) => {
  const navigate = useNavigate();

  const handleNextAction = () => {
    if (next === "change") {
      setNextAction("navigate");
      console.log(next);
    }
    if (next === "navigate") {
      navigate(`/onboarding/${now + 1}`);
    }
  };
  return (
    <Button $isActive={isActive} onClick={handleNextAction}>
      다음으로
    </Button>
  );
};
