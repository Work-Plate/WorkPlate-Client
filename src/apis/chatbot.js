import { aiInstance } from "./aiInstance";

/**
 * 사용자 메시지를 AI 챗봇 서버로 전송
 * @param {string} userMessage - 사용자 메시지
 * @param {string} memberId - 사용자 ID
 * @returns {Promise<Object>} - AI 서버의 응답 데이터
 */
export const sendUserMessage = async (userMessage, memberId) => {
  try {
    const response = await aiInstance.post("/ai/chatbot", {
      user_message: userMessage,
      username: memberId,
    });
    console.log(response.data);
    return response.data; // { task_type, text, additional_data }
  } catch (error) {
    console.error("AI 챗봇 서버와의 통신 오류:", error);
    throw error;
  }
};
