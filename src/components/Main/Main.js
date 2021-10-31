import React from 'react';
import AccessControl from '../AccessControl/AccessControl';
import { Header, Sidebar } from '../shared';
import { Container, Wrapper } from './styles';
const Main = () => {
  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <Header />
        <AccessControl />
      </Container>
    </Wrapper>
  );
};

export default Main;
