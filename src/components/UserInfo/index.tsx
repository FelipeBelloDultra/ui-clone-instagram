import React from 'react';

import {
  Container,
  UserDataContainer,
  Suggestions,
  SuggestionsList,
} from './styles';

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

      <SuggestionsList>
        <aside>
          <span />

          <div>
            <p>felipe_belloo</p>
            <span>Followed by felipe_belloo + 77 more</span>
          </div>

          <button type="button">Follow</button>
        </aside>
        <aside>
          <span />

          <div>
            <p>felipe_belloo</p>
            <span>Followed by felipe_belloo + 77 more</span>
          </div>

          <button type="button">Follow</button>
        </aside>
        <aside>
          <span />

          <div>
            <p>felipe_belloo</p>
            <span>Followed by felipe_belloo + 77 more</span>
          </div>

          <button type="button">Follow</button>
        </aside>
        <aside>
          <span />

          <div>
            <p>felipe_belloo</p>
            <span>Followed by felipe_belloo + 77 more</span>
          </div>

          <button type="button">Follow</button>
        </aside>
        <aside>
          <span />

          <div>
            <p>felipe_belloo</p>
            <span>Followed by felipe_belloo + 77 more</span>
          </div>

          <button type="button">Follow</button>
        </aside>
      </SuggestionsList>
    </Container>
  );
};

export default UserInfo;
