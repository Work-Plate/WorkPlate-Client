import { useState, useRef, useEffect } from "react";
import Layout from "../../components/common/layout/Layout";
import SubHeader from "../../components/common/subheader/SubHeader";
import ChatScrollBox from "../../components/chatBotPageComponent/chatScrollBox/ChatScrollBox";
import ChatbotTextBalloon from "../../components/chatBotPageComponent/chatbotTextBalloon/ChatbotTextBalloon";
import UserTextBalloon from "../../components/chatBotPageComponent/userTextBalloon/UserTextBalloon";
import UserInput from "../../components/chatBotPageComponent/userInput/UserInput";
import ChatbotRecommendScroll from "../../components/chatBotPageComponent/chatbotRecommendScroll/ChatbotRecommendScroll";
import { PageContainer } from "./ChatBotPage.styled";
import { sendUserMessage } from "../../apis/chatbot";
import { speakText } from "../../utils/speakText";

const ChatBotPage = () => {
  const memberId = "celina324"; // 예시로 고정된 member_id
  const [messages, setMessages] = useState([]);

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

  const handleSendMessage = async () => {
    if (inputValue.trim()) {
      const userMessage = inputValue;
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", type: "text", text: userMessage },
      ]);
      setInputValue("");

      try {
        // 서버로 사용자 메시지 전송 및 응답 수신
        const response = await sendUserMessage(userMessage, memberId);
        const { task_type, text, additional_data } = response;

        // 챗봇 응답을 추가
        if (task_type === "job_recommend" && additional_data?.job_id_list) {
          // 추천 작업일 경우, 이미지 슬라이드 형태로 보여줌
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "bot", type: "text", text: text },
            {
              sender: "bot",
              type: "recommend",
              images: additional_data.job_id_list,
            },
          ]);
          speakText(text);
        } else {
          // 일반 대화일 경우 텍스트만 추가
          setMessages((prevMessages) => [
            ...prevMessages,
            { sender: "bot", type: "text", text: text },
          ]);
          speakText(text);
        }
      } catch (error) {
        console.error("메시지 전송 오류:", error);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "bot",
            type: "text",
            text: "죄송합니다. 응답 중 오류가 발생했습니다.",
          },
        ]);
      }
    }
  };

  const handleVoiceClick = () => {
    console.log("음성 버튼이 클릭되었습니다!");
  };

  return (
    <Layout>
      <PageContainer>
        <SubHeader
          title="밥상일터 도우미"
          showLeftButton={true}
          leftLink="/"
          showRightButton={true}
          rightLink="/"
          rightIcon="/icons/x.svg"
        />

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

        <UserInput
          value={inputValue}
          onInputChange={handleInputChange}
          onVoiceClick={handleVoiceClick}
          onSend={handleSendMessage}
        />
      </PageContainer>
    </Layout>
  );
};

export default ChatBotPage;
