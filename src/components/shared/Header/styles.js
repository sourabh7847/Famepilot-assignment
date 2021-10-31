import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  div {
    display: flex;
    align-items: center;

    .MuiAvatar-root {
      max-width: 30px;
      max-height: 30px;
      margin-right: 10px;
    }

    p {
      margin-right: 5px;
      font-weight: 500;
      font-weight: 16px;
      letter-spacing: 0.3px;
      flex-grow: 1;
    }
  }

  .MuiSvgIcon-root {
    margin: 0 5px;
    fill: lightgray;
  }
`;
