import PropTypes from "prop-types";
import { ScrollBoxContainers } from "./FoodScrollBox.styled";
import Text from "../../common/text/Text";
import Typewriter from "typewriter-effect";

const FoodScrollBox = ({ children }) => {
  return (
    <ScrollBoxContainers>
      <Text
        size="6vw"
        color="#0C0E27"
        weight="500"
        align="left"
        margin="6.2vw 0vw 0vw 5vw"
      >
        김영수 님,
      </Text>

      <Text
        size="4vw"
        color="#0C0E27"
        weight="400"
        align="left"
        margin="3vw 0vw 4vw 5vw"
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
                " 식사 잘 챙기고 계신가요? \n 오늘도 따뜻한 식사를 준비해드릴게요"
              )
              .start();
          }}
        />
      </Text>

      <Text
        size="4.5vw"
        color="#0C0E27"
        weight="700"
        align="left"
        margin="5vw 0vw 0vw 4vw"
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
