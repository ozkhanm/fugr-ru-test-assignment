import styled from "styled-components";

const ErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ErrorMessage = styled.p`
  margin: 0;
  
  font-weight: bold;
  font-size: 42px;
`;

const ErrorPage = () => {
  return (
    <ErrorMessageContainer>
      <ErrorMessage>Not found!</ErrorMessage>
    </ErrorMessageContainer>
  );
};

export default ErrorPage;