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

export const IssueList = styled.ul`
  list-style: none;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 2px solid #eee;

  li {
    display: flex;
    align-items: center;

    padding: 10px;
    border: 1px solid #eee;
    border-radius: 5px;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      border-radius: 50%;
      border: 2px solid #eee;
    }

    div {
      flex: 1;
      margin-left: 10px;

      strong {
        font-size: 16px;

        a {
          text-decoration: none;
          color: #333;

          &:hover {
            color: purple;
          }
        }

        span {
          background: #eee;
          border-radius: 2px;
          padding: 4px;
          margin-left: 5px;

          font-size: 12px;
          font-weight: 600;
          color: #333;
        }
      }

      p {
        margin-top: 5px;
        color: #999;

        font-size: 12px;
      }
    }
  }
`;
