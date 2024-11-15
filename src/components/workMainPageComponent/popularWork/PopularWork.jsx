import PropTypes from "prop-types";
import * as S from "./PopularWork.styled";

const PopularWork = ({ imageUrls }) => {
  return (
    <S.ScrollContainer>
      <S.ImageGrid>
        {imageUrls.map((url, index) => (
          <S.ImageWrapper key={index}>
            <S.Image src={url} alt={`Popular work ${index + 1}`} />
          </S.ImageWrapper>
        ))}
      </S.ImageGrid>
    </S.ScrollContainer>
  );
};

PopularWork.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PopularWork;
