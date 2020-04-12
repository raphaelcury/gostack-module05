import styled from 'styled-components';

// Container, Form, SubmitButton

export const Container = styled.div`
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

export const Form = styled.form`
  display: flex;
  flex-direction: row;

  margin-top: 30px;

  input {
    flex: 1;

    padding: 10px 15px;
    border-radius: 4px;
    border: 1px solid #eee;

    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #7159c1;
  border: 0;
  padding: 0 15px;
  border-radius: 4px;
  margin-left: 10px;
`;
