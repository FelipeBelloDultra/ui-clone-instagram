import React from 'react';

import {
  Container,
  UserDataContainer,
  Suggestions,
  SuggestionsList,
  Links,
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

      <Links>
        <p>About</p>
        <p>Help</p>
        <p>Press</p>
        <p>Api</p>
        <p>Jobs</p>
        <p>Privacy</p>
        <p>Terms</p>
        <p>Locations</p>
        <p>Too Accounts</p>
        <p>Hashtags</p>
        <p>Languge</p>
      </Links>
    </Container>
  );
};

export default UserInfo;
