import * as S from "./Splash.styled";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/main");
    }, 1500);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <S.Wrapper>
      <S.Image src={"/images/logo.svg"} />
    </S.Wrapper>
  );
};
