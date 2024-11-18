// theme.js
const fontGenerator = (
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight = "normal"
) => ({
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
});

const theme = {
  colors: {
    deepOrange: "#FF854C",
    lightOrange: "#FF9B5C",
  },
  fonts: {
    body1: fontGenerator("Pretendard", "1rem", 700),
    title1: fontGenerator("Pretendard", "1.5rem", 700),
    title2: fontGenerator("Pretendard", "1.25rem", 700),
  },
};

export default theme;
