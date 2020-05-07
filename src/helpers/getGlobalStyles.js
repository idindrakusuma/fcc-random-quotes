import { css } from '@emotion/core';

export const getGlobalStyles = (color) => css`
  color: ${color} !important;
  background: ${color};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s ease-in;
  opacity: 1;

  button {
    background-color: ${color} !important;
  }

  .content {
    width: 100%;
  }

  .footer {
    width: 100%;
    color: #fff !important;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    margin-top: 20px;
    font-size: 0.9em;
  }
`;
