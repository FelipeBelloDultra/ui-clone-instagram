import styled, { css } from 'styled-components';

interface IIconsHeaderProps {
  hasNotifications?: number;
}

export const Container = styled.div`
  width: 938px;
  height: 54px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-top: 5px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    cursor: pointer;
    left: 170px;
  }

  input {
    border: 1px solid #dbdbdb;
    background: #fafafa;
    color: #8e8e8e;
    height: 27px;
    width: 215px;
    padding: 7px 7px 7px 22px;
    text-align: center;
    border-radius: 3px;
    margin-left: 100px;

    &::placeholder {
      color: #8e8e8e;
    }
  }
`;

export const OptionsGroupCotainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 196px;
`;

export const OptionsItems = styled.a<IIconsHeaderProps>`
  display: flex;
  align-items: center;
  width: 21px;
  height: 21px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  span {
    width: 100%;
    height: 100%;
    border-radius: 50%;
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

  &:before {
    ${props =>
      props.hasNotifications &&
      css`
        content: '${props.hasNotifications}';
      `}
    top: -8px;
    right: -8px;
    color: #fff;
    font-size: 10px;
    position: absolute;
    background: #ed4956;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
