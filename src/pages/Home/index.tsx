import React from 'react';

import Header from '../../components/Header';

import { HeaderContainer, Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container />
    </>
  );
};

export default Home;
