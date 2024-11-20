import React from "react";
import styled from "@emotion/styled";

const PickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  position: fixed;
  top: 40%;
  width: 100%;
  max-width: 500px;
`;

const Picker = styled.select`
  width: 30%;
  height: 40px;
  font-size: 1rem;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: white;
`;

export const DatePicker = ({ startDate, setStartDate }) => {
  const years = Array.from(
    { length: 101 },
    (_, i) => new Date().getFullYear() - 100 + i
  ); // 최근 100년 범위
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleYearChange = (e) => {
    const newDate = new Date(startDate);
    newDate.setFullYear(e.target.value);
    setStartDate(newDate);
  };

  const handleMonthChange = (e) => {
    const newDate = new Date(startDate);
    newDate.setMonth(e.target.value - 1);
    setStartDate(newDate);
  };

  const handleDayChange = (e) => {
    const newDate = new Date(startDate);
    newDate.setDate(e.target.value);
    setStartDate(newDate);
  };

  return (
    <PickerWrapper>
      <Picker value={startDate.getFullYear()} onChange={handleYearChange}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}년
          </option>
        ))}
      </Picker>
      <Picker value={startDate.getMonth() + 1} onChange={handleMonthChange}>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}월
          </option>
        ))}
      </Picker>
      <Picker value={startDate.getDate()} onChange={handleDayChange}>
        {days.map((day) => (
          <option key={day} value={day}>
            {day}일
          </option>
        ))}
      </Picker>
    </PickerWrapper>
  );
};
