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
            background: #00ff00;
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
      background: #000;
      left: 4px;
      bottom: 4px;
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
