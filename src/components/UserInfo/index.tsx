import React from 'react';

import { Container, UserDataContainer, Suggestions } from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <UserDataContainer>
        <span />

        <div>
          <p>felipe_belloo</p>
          <span>Felipe Bello Dultra</span>
        </div>
      </UserDataContainer>

      <Suggestions>
        <p className="suggestions">Suggestions For You</p>
        <p className="see-all">See All</p>
      </Suggestions>
    </Container>
  );
};

export default UserInfo;
