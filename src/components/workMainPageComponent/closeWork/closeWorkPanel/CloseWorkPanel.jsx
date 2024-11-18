import * as S from "./CloseWorkPanel.styled";
import Text from "@components/common/text/Text";
import PropTypes from "prop-types";
import GrayLine from "@components/common/grayLine/GrayLine";

const CloseWorkPanel = ({ imageSrc, title, subtitle, distance }) => {
  return (
    <>
      <S.PanelContainer>
        <S.TextContainer>
          <Text
            size="1.2rem"
            color="#0C0E27"
            weight="600"
            align="left"
            margin="0"
          >
            {title}
          </Text>
          <Text
            size="1rem"
            color="#0C0E27"
            weight="400"
            align="left"
            margin="0"
          >
            {subtitle}
          </Text>
          <Text
            size="1rem"
            color="#707E86"
            weight="500"
            align="left"
            margin="0.2rem 0 0 0"
          >
            {distance}
          </Text>
        </S.TextContainer>
        <S.ImageContainer>
          <S.Image src={imageSrc} alt="Thumbnail" />
        </S.ImageContainer>
      </S.PanelContainer>
      <GrayLine width="100%" thickness="0.1rem" />
    </>
  );
};

CloseWorkPanel.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
};

export default CloseWorkPanel;
