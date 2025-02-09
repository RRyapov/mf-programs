import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1336px;
  min-height: calc(100vh - 30px);
  height: 100%;

  margin: 0px auto;
  padding: 0px 55px;

  background-size: cover;
  background: rgba(0,0,0,0.45);
`;

export const MainBackground = styled.div`
  background: url("https://i.postimg.cc/7YJSftWs/background-blur.png") no-repeat center center fixed;

  width: 100%;
    background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;


export const Footer = styled.div`
  margin-bottom: auto;

  z-index: 10;
  width: 100%;
  height: 30px;

  background: #000;
`;

export const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BlueBlink = css`
  background: rgb(30, 134, 166);
  background: linear-gradient(
    90deg,
    rgba(30, 134, 166, 1) 2%,
    rgba(4, 177, 232, 1) 54%,
    rgba(30, 134, 166, 1) 100%
  );

  box-shadow: 0px 0px 66px 11px rgba(46, 175, 255, 0.9);
`;

export const ButtonStyle = css`
  ${FlexCenter}

  width: fit-content;
  height: 50px;

  background: rgb(0, 104, 136);

  border: #2fb3ff 3px solid;
  border-radius: 25px;

  font-family: "Anton", sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 6mm;
  color: #ffffff;
  text-shadow: 2px 2px 2px #012133;
  padding-bottom: 5px;
  padding-left: 12px;
  padding-right: 12px;
  transition: all 0.3s ease-in-out;

  .hang {
  }

  &:hover {
    ${BlueBlink}
    transform: scale(1.1);
    cursor: pointer;

    &:active {
      transform: scale(0.975);
      transition: none;
    }
  }
`;
