// TTS 기능
export const speakText = (text) => {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ko-KR";
    window.speechSynthesis.speak(utterance);
  } else {
    console.warn("이 브라우저는 음성 합성을 지원하지 않습니다.");
  }
};
