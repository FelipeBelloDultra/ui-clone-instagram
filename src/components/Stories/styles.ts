import styled, { css } from 'styled-components';

interface IStoriesProps {
  isCloseFriend: boolean;
}

export const Container = styled.div`
  background: #fff;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  height: 118px;
  width: 615px;

  div {
    height: 100%;
    display: flex;
    padding: 0 0 0 10px;
    overflow: hidden;
  }
`;

export const StoriesContainer = styled.aside<IStoriesProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 7px;

  span {
    height: 66px;
    width: 66px;
    border-radius: 50%;
    position: relative;
    margin-bottom: 3px;
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
      height: 62px;
      width: 62px;
      border-radius: 50%;
      background: #fff;
      left: 2px;
      bottom: 2px;
    }

    &:after {
      content: '';
      position: absolute;
      height: 58px;
      width: 58px;
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
    color: #262626;
    display: block;
    font-size: 12px;
    line-height: 14px;
    max-width: 64px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
