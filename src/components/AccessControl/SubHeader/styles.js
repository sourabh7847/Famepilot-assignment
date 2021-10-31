import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  margin-top: 24px;
  width: 100%;
  border-bottom: 1px solid rgba(207, 211, 218, 0.5);

  .active {
    .MuiSvgIcon-root {
      fill: #673ab7;
    }
    p {
      color: #673ab7;
    }
    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 5px;
      background-color: #673ab7;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      transform: translateY(0);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 40px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  padding-left: 25px;
  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    /* margin-left: 25px; */
    position: relative;
    padding: 0 11px;
    padding-left: 4px;
    transition: all 1s linear;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 5px;
      background-color: #673ab7;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      transition: all 0.1s linear;
      transform: translateY(7px);
    }
    .MuiSvgIcon-root {
      fill: #dadada;
      font-size: 24px;
      margin-right: 5px;
    }

    p {
      font-weight: 500;
      font-size: 15px;
      color: #333333;
    }

    &:hover {
      .MuiSvgIcon-root {
        fill: #673ab7;
      }
      p {
        color: #673ab7;
      }

      &::after {
        transform: translateY(0);
      }
    }
  }

  span {
    display: flex;
    align-items: center;

    .MuiSvgIcon-root {
      fill: #dadada;
    }

    p {
      margin-left: 4px;
      font-size: 14px;
    }
  }
`;

export const Divider = styled.div`
  background: lightgray;
  width: 1px;
  height: 30px;
  padding: 0 !important;
  margin: 0 10px !important;
`;
