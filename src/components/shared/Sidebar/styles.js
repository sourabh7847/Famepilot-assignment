import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  background: transparent;
  min-width: 240px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fcfbff;

  .active {
    background-color: #e1d8f1;
    .MuiSvgIcon-root {
      fill: #673ab7;
    }
    p {
      color: #673ab7 !important;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background-color: #673ab7;
      width: 7px;
      height: 100%;
      opacity: 1;
      transition: all 0.2s linear;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding-left: 15px;

  img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }

  h2 {
    font-size: 18px;
    font-weight: bold;
    color: #330b86;
    font-family: Roboto, sans-serif;
  }
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 10px;
  margin-left: 8px;
  transition: all 0.2s linear;
  cursor: pointer;

  .MuiSvgIcon-root {
    font-size: 20px;
  }

  p {
    font-family: Roboto;
    font-size: 16px;
    color: #828282;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background-color: #673ab7;
    width: 7px;
    height: 100%;
    opacity: 0;
    transition: all 0.2s linear;
  }

  &:hover {
    background-color: #e1d8f1;

    &::before {
      opacity: 1;
    }

    p {
      color: #673ab7;
    }
    .MuiSvgIcon-root {
      fill: #673ab7;
    }
  }

  p {
    margin-left: 5px;
  }
`;
