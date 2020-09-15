import React from 'react';

import Header from '../../components/Header';
import Stories from '../../components/Stories';
import Feed from '../../components/Feed';
import UserInfo from '../../components/UserInfo';

import {
  HeaderContainer,
  Container,
  ContainerFeed,
  ContainerUserInfo,
} from './styles';

const Home: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <Container>
        <ContainerFeed>
          <Stories />
          <Feed />
        </ContainerFeed>
        <ContainerUserInfo>
          <UserInfo />
        </ContainerUserInfo>
      </Container>
    </>
  );
};

export default Home;
