import { forwardRef } from "react";
import PropTypes from "prop-types";
import { ScrollBoxContainers } from "./ChatScrollBox.styled";
import Text from "../../common/text/Text";
import GrayLine from "../../common/grayLine/GrayLine";
import Typewriter from "typewriter-effect";

const ChatScrollBox = forwardRef(({ children }, ref) => {
  return (
    <ScrollBoxContainers ref={ref}>
      <Text
        size="6vw"
        color="#0C0E27"
        weight="500"
        align="left"
        margin="6.2vw 0vw 0vw 5vw"
      >
        안녕하세요! 만나서 반갑습니다. <br />
        밥상일터 사용을 도와드릴게요.
      </Text>

      <Text
        size="4.5vw"
        color="#0C0E27"
        weight="700"
        align="left"
        margin="7vw 0vw 0vw 4vw"
      >
        “근처 식당 찾아줘”
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
              .typeString("근처에서 크레딧으로 식사 가능한 곳을 알려드려요")
              .start();
          }}
        />
      </Text>

      <GrayLine width="90vw" thickness="0.3vw" />

      <Text
        size="4.5vw"
        color="#0C0E27"
        weight="700"
        align="left"
        margin="5vw 0vw 0vw 4vw"
      >
        “30분 거리 일거리 찾아줘”
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
            delay: 150,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("30분 거리에 있는 소일거리를 찾아드릴게요")
              .start();
          }}
        />
      </Text>
      <GrayLine width="90vw" thickness="0.3vw" />
      {children}
    </ScrollBoxContainers>
  );
});

ChatScrollBox.displayName = "ChatScrollBox";

ChatScrollBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ChatScrollBox;
