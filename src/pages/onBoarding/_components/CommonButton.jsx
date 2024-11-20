import styled from "@emotion/styled";
import { useState } from "react";

const Wrapper = styled.button`
  display: flex;
  padding: 1rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: ${({ $status }) =>
    $status ? "1px solid #FF854C" : "1px solid #eee"};
  background: ${({ $status }) => ($status ? "#FFF3ED" : "#f5f6f9")};
  cursor: pointer;
`;

export const CommonButton = ({ children, $index, setActive, type = "exp" }) => {
  const [status, setStatus] = useState(false);

  const handleClick = (index, children) => {
    setStatus(!status); // 클릭 상태 토글

    // 기존 데이터를 가져옵니다.
    const existingData = JSON.parse(sessionStorage.getItem(type)) || [];
    if (existingData) {
      setActive(true);
    }
    let updatedData;
    if (!status) {
      // 버튼이 활성화될 때: 데이터를 추가
      updatedData = [...existingData, children];
    } else {
      // 버튼이 비활성화될 때: 데이터를 제거
      updatedData = existingData.filter((item) => item !== children);
    }

    // 업데이트된 데이터를 sessionStorage에 저장
    sessionStorage.setItem(type, JSON.stringify(updatedData));
  };

  return (
    <Wrapper
      $index={$index}
      $status={status}
      onClick={() => handleClick($index, children)}
    >
      {children}
    </Wrapper>
  );
};
