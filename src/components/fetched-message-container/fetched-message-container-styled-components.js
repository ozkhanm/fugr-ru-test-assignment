import styled from "styled-components";

export const FetchedMessageBlock = styled.div`
  margin: 0;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FetchedMessage = styled.p`
  margin: 0;

  font-size: 20px;

  @media screen and (min-width: 720px) {
    margin-right: 30px;

    font-size: 40px;
  }
`;