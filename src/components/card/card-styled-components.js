import styled from "styled-components";

export const CardContainer = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 50px;
  padding: 25px;
  width: 15%;
  min-width: 150px;
  flex-grow: 1;

  background-color: #e3e0e0;

  cursor: pointer;
`;

export const CardImage = styled.img`
  display: block;
  margin: 0 auto;

  box-shadow: 5px 5px 15px -5px;
`;

export const CardCategory = styled.p`
  margin: 0;
  margin-bottom: 20px;
  min-height: 18px;

  color: #797979;

  text-decoration: underline;
`;

export const CardName = styled.h2`
  margin: 0;
  margin-bottom: 20px;

  font-size: 20px;
`;

export const CardAuthor = styled.p`
  margin: 0;

  color: #797979;
`;

export const CardImageWrapper = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
`;