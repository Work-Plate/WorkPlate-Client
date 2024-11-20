import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const OnBoarding4 = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/main");
  }, []);
};
