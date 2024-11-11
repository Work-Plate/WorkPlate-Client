import { useState, useRef, useEffect } from "react";
import Layout from "../../components/common/layout/Layout";
import SubHeader from "../../components/common/subheader/SubHeader";
import ChatScrollBox from "../../components/chatBotPageComponent/chatScrollBox/ChatScrollBox";
import ChatbotTextBalloon from "../../components/chatBotPageComponent/chatbotTextBalloon/ChatbotTextBalloon";
import UserTextBalloon from "../../components/chatBotPageComponent/userTextBalloon/UserTextBalloon";
import UserInput from "../../components/chatBotPageComponent/userInput/UserInput";
import ChatbotRecommendScroll from "../../components/chatBotPageComponent/chatbotRecommendScroll/ChatbotRecommendScroll";
import { PageContainer, SubHeaderFixed } from "./ChatBotPage.styled";

const ChatBotPage = () => {
  const images = [
    "/ChatbotRecommendScrollImage/ChatbotRecommendScroll1.svg",
    "/ChatbotRecommendScrollImage/ChatbotRecommendScroll1.svg",
    "/ChatbotRecommendScrollImage/ChatbotRecommendScroll1.svg",
  ];

  const [messages, setMessages] = useState([
    { sender: "user", type: "text", text: "근처 식당 찾아줘" },
    {
      sender: "bot",
      type: "text",
      text: "근처에 있는 밥상일터 식당을 찾아드릴게요",
    },
    { sender: "bot", type: "recommend", images: images },
  ]);

  const [inputValue, setInputValue] = useState("");
  const chatBoxRef = useRef(null);

  useEffect(() => {
    // messages가 변경될 때마다 스크롤을 최신 메시지 위치로 이동
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", type: "text", text: inputValue },
      ]);
      setInputValue("");

      if (inputValue.includes("추천")) {
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "bot", type: "recommend", images: images },
          ]);
        }, 1000);
      } else {
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "bot", type: "text", text: "냠냠" },
          ]);
        }, 1000);
      }
    }
  };

  const handleVoiceClick = () => {
    console.log("음성 버튼이 클릭되었습니다!");
  };

  return (
    <Layout>
      <SubHeaderFixed>
        <SubHeader
          title="밥상일터 도우미"
          showLeftButton={true}
          leftLink="/"
          showRightButton={true}
          rightLink="/"
          rightIcon="/icons/x.svg"
        />
      </SubHeaderFixed>

      <PageContainer>
        <ChatScrollBox ref={chatBoxRef}>
          {messages.map((msg, index) => {
            if (msg.sender === "user") {
              return <UserTextBalloon key={index}>{msg.text}</UserTextBalloon>;
            } else if (msg.type === "text") {
              return (
                <ChatbotTextBalloon key={index}>{msg.text}</ChatbotTextBalloon>
              );
            } else if (msg.type === "recommend") {
              return <ChatbotRecommendScroll key={index} images={msg.images} />;
            }
            return null;
          })}
        </ChatScrollBox>
      </PageContainer>

      <UserInput
        value={inputValue}
        onInputChange={handleInputChange}
        onVoiceClick={handleVoiceClick}
        onSend={handleSendMessage}
      />
    </Layout>
  );
};

export default ChatBotPage;
