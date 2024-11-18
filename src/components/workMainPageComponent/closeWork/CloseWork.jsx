import { useState } from "react";
import PropTypes from "prop-types";
import * as S from "./CloseWork.styled";
import CloseWorkPanel from "./closeWorkPanel/CloseWorkPanel";

const CloseWork = ({ panelsData }) => {
  const [visibleCount, setVisibleCount] = useState(4); // 처음에 4개만

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // 4개씩 더
  };

  return (
    <S.Container>
      {panelsData.slice(0, visibleCount).map((panel, index) => (
        <CloseWorkPanel
          key={index}
          imageSrc={panel.imageSrc}
          title={panel.title}
          subtitle={panel.subtitle}
          distance={panel.distance}
        />
      ))}
      {visibleCount < panelsData.length && (
        <S.LoadMoreButton onClick={handleLoadMore}>더보기</S.LoadMoreButton>
      )}
    </S.Container>
  );
};

CloseWork.propTypes = {
  panelsData: PropTypes.arrayOf(
    PropTypes.shape({
      imageSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      distance: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CloseWork;
