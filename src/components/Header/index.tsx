import React from 'react';
import { FiSearch } from 'react-icons/fi';

import logoHeader from '../../assets/instagram-logo-header.png';
import homeIcon from '../../assets/headers-icons/home.png';
import directIcon from '../../assets/headers-icons/direct.png';
import findPeopleIcon from '../../assets/headers-icons/find-people.png';
import activityFeedIcon from '../../assets/headers-icons/activity-feed.png';

import {
  Container,
  InputContainer,
  OptionsGroupCotainer,
  OptionsItems,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src={logoHeader} alt="Instagram Logo" />

      <InputContainer>
        <FiSearch color="#8e8e8e" size={14} />
        <input type="text" placeholder="Search" />
      </InputContainer>

      <OptionsGroupCotainer>
        <OptionsItems href="/">
          <img src={homeIcon} alt="Home" />
        </OptionsItems>
        <OptionsItems href="/" hasNotifications={99}>
          <img src={directIcon} alt="Home" />
        </OptionsItems>
        <OptionsItems href="/">
          <img src={findPeopleIcon} alt="Home" />
        </OptionsItems>
        <OptionsItems href="/" hasNotifications={6}>
          <img src={activityFeedIcon} alt="Home" />
        </OptionsItems>
        <OptionsItems href="/">
          <span />
        </OptionsItems>
      </OptionsGroupCotainer>
    </Container>
  );
};

export default Header;
