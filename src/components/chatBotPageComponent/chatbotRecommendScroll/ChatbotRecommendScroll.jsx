import PropTypes from "prop-types";
import { ScrollContainer, ImageCard } from "./ChatbotRecommendScroll.styled";

const ChatbotRecommendScroll = ({ images }) => {
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

ChatbotRecommendScroll.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ChatbotRecommendScroll;
