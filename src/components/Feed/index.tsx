import React from 'react';

import { Container, Post, StoriesContainer } from './styles';

import commentIcon from '../../assets/feed-icons/comment.png';
import likeIcon from '../../assets/feed-icons/like.png';
import saveIcon from '../../assets/feed-icons/save.png';
import sharePostIcon from '../../assets/feed-icons/share-post.png';

const Feed: React.FC = () => {
  return (
    <Container>
      <Post>
        <header>
          <StoriesContainer isCloseFriend>
            <span />
            <p>felipe</p>
          </StoriesContainer>

          <button type="button">...</button>
        </header>

        <aside />

        <footer>
          <span>
            <img src={likeIcon} alt="Like" />
            <img src={commentIcon} alt="Comment" />
            <img src={sharePostIcon} alt="Share" />
          </span>
          <span>
            <img src={saveIcon} alt="Save" />
          </span>
        </footer>

        <main />
      </Post>
    </Container>
  );
};

export default Feed;
