import * as S from "./Header.styled";

export const Header = () => {
  return (
    <S.Wrapper>
      <S.Logo src="/images/logo.svg" />
      <S.Alert src="/images/alert.svg" />
    </S.Wrapper>
  );
};
