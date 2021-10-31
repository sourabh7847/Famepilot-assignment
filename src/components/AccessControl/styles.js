import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  .edit-section {
    display: flex;
    align-items: center;
    width: max-content;
    margin-bottom: 25px;

    .MuiSvgIcon-root {
      color: gray;
      margin: 0 8px;
      cursor: pointer;
    }
  }

  .MuiTableContainer-root {
    /* width: 92%; */
    border-radius: 4px;
  }

  .MuiTableHead-root {
    background: #f2f2f2;
  }

  .col-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    height: 24px;

    .MuiSvgIcon-root {
      font-size: 18px;
      fill: gray;
    }
  }

  .css-jsexje-MuiSwitch-thumb {
    color: #fff;
  }

  .css-5ryogn-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked
    + .MuiSwitch-track {
    background-color: #27ae60;
    opacity: 1;
  }
`;

export const Content = styled.div`
  padding-top: 30px;
  padding-left: 80px;
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  background-color: #673ab7;
  width: max-content;
  padding: 4px 40px;
  height: 30px;
  border-radius: 5px;
  margin-right: 16px;
  cursor: pointer;

  .MuiSvgIcon-root {
    fill: #fff;
    font-size: 20px;
    margin: 0 !important;
  }

  p {
    margin-left: 4px;
    color: #fff;
    font-size: 14px;
  }
`;

export const Access = styled.div`
  border: 1px solid #27ae60;
  border-radius: 20px;
  padding: 2px 10px;
  font-size: 14px;

  color: ${(props) => {
    if (props.access === 'all') {
      return '#27ae60';
    } else if (props.access === 'restricted') {
      return '#FF0808';
    } else if (props.access === 'none') {
      return '#BDBDBD';
    }
  }};

  border-color: ${(props) => {
    if (props.access === 'all') {
      return '#27ae60';
    } else if (props.access === 'restricted') {
      return '#FF0808';
    } else if (props.access === 'none') {
      return '#BDBDBD';
    }
  }};

  background-color: ${(props) => {
    if (props.access === 'all') {
      return 'rgba(39, 174, 96, 0.3)';
    } else if (props.access === 'restricted') {
      return 'rgba(255, 8, 8, 0.3)';
    } else if (props.access === 'none') {
      return '#f2f2f2';
    }
  }};
  letter-spacing: 0.2px;
`;

export const InfoHeader = styled.div`
  color: #673ab7;
  display: flex;
  align-items: center;

  .MuiSvgIcon-root {
    fill: gray;
    font-size: 21px;
  }

  p {
    margin: 0 18px;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const RoleWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 20px;
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

export const RoleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 40px;
`;

export const RoleContent = styled.div`
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

export const SubTableContainer = styled.div`
  width: 92%;
`;

export const CollapsableContent = styled.div`
  padding: 0px 18px;
  display: flex;

  .left {
    margin-left: 8%;
    padding: 10px 20px;
    min-width: max-content;
    width: 350px;
    min-width: max-content;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 5%;
      right: 0;
      height: 90%;
      width: 1px;
      background-color: lightgray;
    }
  }

  .radio-container {
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    .css-vqmohf-MuiButtonBase-root-MuiRadio-root.Mui-checked {
      color: #673ab7;
    }

    .radio-options {
      p {
        margin: 0;
        margin-left: 2px;
        letter-spacing: 0.2px;
        &:nth-child(2) {
          color: #bdbdbd;
        }
      }
    }
  }

  .right {
    padding: 10px 20px;
    margin-left: 6%;
  }

  .select-container {
    display: flex;
    align-items: center;
    margin: 4px 0;
    .Mui-checked {
      color: #673ab7;
    }
    p {
      margin: 0;
      font-size: 14px;
      letter-spacing: 0.2px;
    }
  }

  h4 {
    font-size: 16px;
    letter-spacing: 0.5px;
    color: #000000;
  }
`;
