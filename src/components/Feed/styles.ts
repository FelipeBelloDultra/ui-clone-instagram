import styled, { css } from 'styled-components';

interface IStoriesProps {
  isCloseFriend: boolean;
}

export const Container = styled.div`
  margin-top: 25px;
  margin-bottom: 60px;
`;

export const Post = styled.div`
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 3px;

  header {
    height: 56px;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      cursor: pointer;
      display: flex;
      background: transparent;
      padding: 5px 0;
      margin-bottom: 10px;
      margin-right: 5px;
      font-weight: bold;
      letter-spacing: 0.1px;
      font-size: 20px;
    }
  }

  aside {
    width: 100%;
    height: 500px;
    border-left: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    background-image: linear-gradient(
      -90deg,
      #c9c9c9 0%,
      #dbdbdb 50%,
      #c9c9c9 100%
    );
    background-size: 400% 400%;
    animation: shimmer 1.2s ease-in-out infinite;

    @keyframes shimmer {
      0% {
        background-position: 0% 0%;
      }
      100% {
        background-position: -135% 0%;
      }
    }
  }

  footer {
    padding: 10px 0 10px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      cursor: pointer;
      margin-right: 16px;
    }
  }

  main {
    padding: 0 16px;
  }
`;

export const StoriesContainer = styled.div<IStoriesProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 7px;

  span {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    position: relative;
    margin-right: 13px;
    cursor: pointer;
    ${props =>
      props.isCloseFriend
        ? css`
            background: #64cd2f;
          `
        : css`
            background: linear-gradient(#f99d4c, #e783ae);
          `}

    &:before {
      content: '';
      position: absolute;
      height: 36px;
      width: 36px;
      border-radius: 50%;
      background: #fff;
      left: 2px;
      bottom: 2px;
    }

    &:after {
      content: '';
      position: absolute;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      left: 4px;
      bottom: 4px;
      background-image: linear-gradient(
        -90deg,
        #c9c9c9 0%,
        #dbdbdb 50%,
        #c9c9c9 100%
      );
      background-size: 400% 400%;
      animation: shimmer 1.2s ease-in-out infinite;

      @keyframes shimmer {
        0% {
          background-position: 0% 0%;
        }
        100% {
          background-position: -135% 0%;
        }
      }
    }
  }

  p {
    font-weight: bold;
    font-size: 15px;
  }
`;
