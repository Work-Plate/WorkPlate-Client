import PropTypes from "prop-types";
import { ScrollBoxContainers } from "./FoodScrollBox.styled";
import Text from "../../common/text/Text";
import Typewriter from "typewriter-effect";

const FoodScrollBox = ({ children }) => {
  return (
    <ScrollBoxContainers>
      <Text
        size="1.4rem"
        color="#0C0E27"
        weight="700"
        align="left"
        margin="2rem 0 0 1rem"
      >
        김영수 님,
      </Text>

      <Text
        size="1.3rem"
        color="#0C0E27"
        weight="400"
        align="left"
        margin="0.4rem 0 0 1rem"
      >
        <Typewriter
          options={{
            autoStart: true,
            loop: false,
            delay: 100,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                " 식사 잘 챙기고 계신가요? <br> 오늘도 따뜻한 식사를 준비해드릴게요."
              )
              .start();
          }}
        />
      </Text>

      <Text
        size="1.6rem"
        color="#0C0E27"
        weight="700"
        align="left"
        margin="1.5rem 0 0.8rem 1rem"
      >
        내 근처 밥상
      </Text>

      {children}
    </ScrollBoxContainers>
  );
};

FoodScrollBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FoodScrollBox;
