import styled from "styled-components";

export const FindResultBlock = styled.p`
  margin: 0;
  padding-top: 25px;
  padding-bottom: 25px;

  font-size: 18px;
  text-align: center;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const MainContentContainer = styled.div`
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 50px;
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px;
  width: 60%;

  font-size: 24px;
  
  background-color: #e3e0e0;

  border: 0;
  border-radius: 10px;

  @media screen and (min-width: 720px) {
    width: 30%;
  }
`;