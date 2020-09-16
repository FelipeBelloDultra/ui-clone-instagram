import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 324px;
  height: 492px;
  margin-top: 30px;
  padding: 20px 0 0 30px;

  > p {
    font-size: 11px;
    color: #d1d1d1;
  }
`;

export const UserDataContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;

  > span {
    cursor: pointer;
    margin-right: 15px;
    height: 56px;
    width: 56px;
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

  div {
    font-size: 14px;

    p {
      font-weight: bold;
      margin-bottom: 5px;
      cursor: pointer;
    }

    span {
      color: #8e8e8e;
      letter-spacing: -0.5px;
      font-size: 12px;
    }
  }
`;

export const Suggestions = styled.div`
  margin-top: 25px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .suggestions {
    cursor: pointer;
    color: #8e8e8e;
    font-weight: bold;
    font-size: 14px;
  }

  .see-all {
    cursor: pointer;
    color: #000000;
    font-weight: bold;
    font-size: 12px;
  }
`;

export const SuggestionsList = styled.div`
  aside {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 16px;

    > span {
      cursor: pointer;
      margin-right: 15px;
      height: 32px;
      width: 32px;
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

    div {
      font-size: 14px;

      p {
        font-weight: bold;
        cursor: pointer;
      }

      span {
        color: #8e8e8e;
        letter-spacing: -0.5px;
        font-size: 12px;
      }
    }

    button {
      cursor: pointer;
      margin-left: auto;
      background: transparent;
      color: #06a8fa;
      font-weight: bold;
      font-size: 12px;
    }
  }
`;

export const Links = styled.div`
  margin-top: 56px;
  margin-bottom: 15px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: start;

  p {
    cursor: pointer;
    margin-right: 10px;
    margin-bottom: 7px;
    font-size: 11px;
    color: #d1d1d1;
  }
`;
