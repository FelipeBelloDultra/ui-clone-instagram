import React from 'react';

import { Container, UserDataContainer } from './styles';

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
    </Container>
  );
};

export default UserInfo;
