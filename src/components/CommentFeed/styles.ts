import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 17px 10px;

  .owner {
    margin: 13px 0 5px;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;

    span {
      color: #183d6f;
      font-weight: normal;
    }
  }

  .posted {
    margin-bottom: 5px;
    font-size: 15px;
    color: #8e8e8e;
    cursor: pointer;
  }

  .comment {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      margin-bottom: 7px;
      font-size: 15px;

      span {
        font-weight: bold;
        margin-right: 5px;
        cursor: pointer;
      }
    }

    img {
      height: 15px;
      width: 15px;
      cursor: pointer;
    }
  }

  .hour {
    text-transform: uppercase;
    font-size: 12px;
    color: #8e8e8e;
    letter-spacing: 0.75px;
  }
`;

export const LikedContainer = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-right: 7px;
    height: 20px;
    width: 20px;
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

  p {
    font-size: 15px;
    margin-bottom: 1px;

    span {
      cursor: pointer;
      font-weight: bold;
    }
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  margin: 10px 0 20px;
  background: #8e8e8e;
  opacity: 0.3;
`;

export const InputComment = styled.div`
  padding: 0 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    flex: 1;
    padding-right: 15px;
  }

  button {
    cursor: pointer;
    width: 30px;
    background: transparent;
    color: #06a8fa;
    font-weight: bold;
    font-size: 15px;
  }
`;
