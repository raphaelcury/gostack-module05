import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  font-size: 30px;
  font-weight: bold;
  color: #fff;
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none;
    color: purple;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    margin-top: 10px;
    font-size: 25px;
    font-weight: bold;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    line-height: 1.4;
    color: gray;
    max-width: 400px;
  }
`;
