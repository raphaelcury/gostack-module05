import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  padding: 30px;
  margin: 80px auto;

  h1 {
    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 20px;

    svg {
      margin-right: 10px;
    }
  }
`;

export default Container;
