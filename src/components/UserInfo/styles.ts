import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 324px;
  height: 492px;
  margin-top: 30px;
  padding: 20px 0 0 30px;
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
