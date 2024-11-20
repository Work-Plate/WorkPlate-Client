import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { ScrollContainer, ImageCard } from "./ChatbotRecommendScroll.styled";
import Text from "../../common/text/Text";
import { getWorks } from "../../../apis/works";

const ChatbotRecommendScroll = ({ images }) => {
  const [restaurantData, setRestaurantData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = {};
      const requests = images.map((id) => getWorks(id));
      const results = await Promise.all(requests);

      results.forEach((workData, index) => {
        if (workData) {
          const id = images[index];
          data[id] = [workData.workName, workData.workDetail];
        }
      });

      setRestaurantData(data);
    };

    fetchData();
  }, [images]);

  const renderRestaurantData = (id) => {
    const [name, detail] = restaurantData[id] || [];
    return (
      <>
        <Text
          size="1rem"
          color="#0C0E27"
          weight="700"
          align="left"
          margin="1rem 0.5rem 0.5rem 1rem"
        >
          {name || "로딩 중..."}
        </Text>
        <Text
          size="1rem"
          color="#707E86"
          weight="500"
          align="left"
          margin="0 0 1rem 1rem"
        >
          {detail || "로딩 중..."}
        </Text>
      </>
    );
  };

  if (!images || images.length === 0) {
    return <p>추천할 이미지가 없습니다.</p>;
  }

  return (
    <ScrollContainer>
      {images.map((id, index) => (
        <ImageCard key={index}>{renderRestaurantData(id)}</ImageCard>
      ))}
    </ScrollContainer>
  );
};

ChatbotRecommendScroll.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
};

export default ChatbotRecommendScroll;
