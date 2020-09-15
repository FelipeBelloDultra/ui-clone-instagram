import React from 'react';

import { Container, StoriesContainer } from './styles';

const Stories: React.FC = () => {
  return (
    <Container>
      <div>
        <StoriesContainer isCloseFriend={false}>
          <span />
          <p>felipe_bello_dultra</p>
        </StoriesContainer>
        <StoriesContainer isCloseFriend>
          <span />
          <p>felipe_bello_dultra</p>
        </StoriesContainer>
      </div>
    </Container>
  );
};

export default Stories;
