import React from 'react';

import loadingImg from '../../assets/loading/loading-icon.png';

import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <img src={loadingImg} alt="Loading" />
    </Container>
  );
};

export default Loading;
