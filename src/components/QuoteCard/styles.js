import { css } from '@emotion/core';

export const Wrapper = css`
  margin: auto;
  display: flex;
  justify-content: center;
  justify-items: center;
`;

export const Box = css`
  font-family: 'Caveat', cursive;
  border-radius: 3px;
  position: relative;
  width: 450px;
  padding: 40px 50px 20px;
  text-align: center;
  font-weight: bold;
  background-color: #fff;
  border-radius: 32px 0 32px 0;

  p {
    font-size: 1.7em;
  }

  button {
    height: 38px;
    border: none;
    border-radius: 3px;
    color: #fff;
    background-color: #333;
    outline: none;
    font-size: 0.85em;
    padding: 8px 18px 6px 18px;
    opacity: 1;
    cursor: pointer;
    margin-left: 4px;
  }
`;

export const actionButton = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  align-content: center;
  margin-top: 16px;
  justify-content: space-between;

  #action-button {
    width: calc(100% - 200px);
    display: flex;
  }

  #author {
    font-size: 1.4em;
    display: flex;
    flex-flow: row-reverse;
  }
`;
