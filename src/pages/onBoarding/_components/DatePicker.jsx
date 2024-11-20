import React from "react";
import Select from "react-select";
import styled from "@emotion/styled";

const PickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
  width: 100%;
  max-width: 500px;
`;

const customStyles = {
  control: (base) => ({
    ...base,
    fontSize: "1rem",
    border: "1px solid #d9d9d9",
    borderRadius: "8px",
    padding: "5px",
    textAlign: "center",
  }),
  menu: (base) => ({
    ...base,
    zIndex: 9999, // Ensure the menu stays on top of other elements
  }),
};

export const DatePicker = ({ startDate, setStartDate }) => {
  const years = Array.from(
    { length: 101 },
    (_, i) => ({
      value: new Date().getFullYear() - 100 + i,
      label: `${new Date().getFullYear() - 100 + i}년`,
    }) // 최근 100년 범위
  );

  const months = Array.from({ length: 12 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}월`,
  }));

  const days = Array.from({ length: 31 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}일`,
  }));

  const handleYearChange = (selectedOption) => {
    const newDate = new Date(startDate);
    newDate.setFullYear(selectedOption.value);
    setStartDate(newDate);
  };

  const handleMonthChange = (selectedOption) => {
    const newDate = new Date(startDate);
    newDate.setMonth(selectedOption.value - 1);
    setStartDate(newDate);
  };

  const handleDayChange = (selectedOption) => {
    const newDate = new Date(startDate);
    newDate.setDate(selectedOption.value);
    setStartDate(newDate);
  };

  return (
    <PickerWrapper>
      <Select
        options={years}
        value={{
          value: startDate.getFullYear(),
          label: `${startDate.getFullYear()}년`,
        }}
        onChange={handleYearChange}
        styles={customStyles}
        placeholder="연도"
      />
      <Select
        options={months}
        value={{
          value: startDate.getMonth() + 1,
          label: `${startDate.getMonth() + 1}월`,
        }}
        onChange={handleMonthChange}
        styles={customStyles}
        placeholder="월"
      />
      <Select
        options={days}
        value={{
          value: startDate.getDate(),
          label: `${startDate.getDate()}일`,
        }}
        onChange={handleDayChange}
        styles={customStyles}
        placeholder="일"
      />
    </PickerWrapper>
  );
};
