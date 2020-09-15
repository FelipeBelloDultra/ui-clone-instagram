import React from 'react';

import { Container, LikedContainer, Line, InputComment } from './styles';

import likeIcon from '../../assets/feed-icons/like.png';

const CommentFeed: React.FC = () => {
  return (
    <>
      <Container>
        <footer>
          <LikedContainer>
            <div />
            <p>
              Liked by <span>felipe_belloo</span> and <span>9,999 others</span>
            </p>
          </LikedContainer>
          <p className="owner">
            felipe_belloo <span>@felipe_belloo</span>
          </p>

          <p className="posted">View all 99 comments</p>

          <div className="comment">
            <p>
              <span>felipe_belloo</span> Hahahaha LOL.
            </p>
            <img src={likeIcon} alt="Like" />
          </div>
          <div className="comment">
            <p>
              <span>belloo_felipe</span> Nice UI Clone.
            </p>
            <img src={likeIcon} alt="Like" />
          </div>

          <p className="hour">5 hours ago</p>
        </footer>
      </Container>
      <Line />
      <InputComment>
        <input type="text" placeholder="Add a comment..." />
        <button type="button">Post</button>
      </InputComment>
    </>
  );
};

export default CommentFeed;
