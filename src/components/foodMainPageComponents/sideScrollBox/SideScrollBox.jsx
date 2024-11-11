import PropTypes from "prop-types";
import { ScrollContainer, ImageCard } from "./SideScrollBox.styled";

const SideScrollBox = ({ images }) => {
  return (
    <ScrollContainer>
      {images.map((src, index) => (
        <ImageCard key={index}>
          <img src={src} />
        </ImageCard>
      ))}
    </ScrollContainer>
  );
};

SideScrollBox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SideScrollBox;
