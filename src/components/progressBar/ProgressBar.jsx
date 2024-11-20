import * as S from "./ProgressBar.styled";

export const ProgressBar = ({ $total = 4, $now }) => {
  return (
    <S.Wrapper>
      <S.Progress $total={$total} $now={$now} />
      <S.NonProgress $total={$total} $now={$now} />
    </S.Wrapper>
  );
};
