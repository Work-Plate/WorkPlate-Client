import React from "react";
import { Global, css } from "@emotion/react";

const baseStyle = css`
  * {
    box-sizing: border-box;
  }

  body,
  button,
  dd,
  dl,
  dt,
  fieldset,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  legend,
  li,
  ol,
  p,
  select,
  table,
  td,
  textarea,
  th,
  ul {
    margin: 0;
    padding: 0;
  }

  body,
  button,
  input,
  select,
  table,
  textarea {
    font-size: 12px;
    line-height: 16px;
    font-family: "Pretendard", -apple-system, BlinkMacSystemFont,
      "Malgun Gothic", "맑은 고딕", helvetica, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    line-height: inherit;
  }

  textarea {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background-color: transparent;
    border: 0;
    word-break: keep-all;
    word-wrap: break-word;
  }

  button,
  input {
    -webkit-border-radius: 0;
    border-radius: 0;
    border: 0;
  }

  button {
    background-color: transparent;
  }

  fieldset,
  img {
    border: 0;
  }

  img {
    vertical-align: top;
  }

  ol,
  ul {
    list-style: none;
  }

  address,
  em {
    font-style: normal;
  }

  a {
    display: flex;
    text-decoration: none;
  }

  iframe {
    overflow: hidden;
    margin: 0;
    border: 0;
    padding: 0;
    vertical-align: top;
  }

  mark {
    background-color: transparent;
  }

  i {
    font-style: normal;
  }

  input::placeholder {
    color: #d2deef;
  }

  :root {
    --vh: 100%;
  }

  html {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f4f6ff;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgb(0 0 0 / 0%);
    scroll-behavior: smooth;

    @media (max-width: 360px) {
      font-size: 12px;
    }
  }

  *::-webkit-scrollbar {
    display: none;
  }

  * {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  #root {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    min-height: 100vh;
  }

  @font-face {
    font-family: "Pretendard";
    src: url("/fonts/Pretendard-Regular.woff") format("woff");
  }

  body {
    width: 100%;
    max-width: 520px;
    overflow-x: hidden;
    scrollbar-width: none;
    -ms-overflow-style: none;

    ::-webkit-scrollbar {
      display: none;
    }

    font-family: "Pretendard", sans-serif;
  }
`;

export const GlobalStyle = () => <Global styles={baseStyle} />;
