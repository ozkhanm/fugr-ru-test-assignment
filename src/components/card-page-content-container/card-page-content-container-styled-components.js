import styled from "styled-components";

export const CardPageContainerStyled = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 720px) {
    flex-direction: row;
  }
`;

export const CardPageImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  padding-bottom: 15px;

  text-align: center;

  background-color: #ececec;

  @media screen and (min-width: 720px) {
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: 0;
    width: 40%;
  }
`;

export const CardPageImage = styled.img`
`;

export const CardPageInfoContainer = styled.div`
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 15px;

  box-sizing: border-box;

  @media screen and (min-width: 720px) {
    padding-top: 50px;
    padding-right: 50px;
    max-width: 60%;
    margin-left: 50px;
  }
`;

export const CardPageCategory = styled.p`
  margin: 0;
  margin-bottom: 15px;
  font-size: 16px;

  @media screen and (min-width: 720px) {
    margin-bottom: 30px;
  }
`;

export const CardPageTitle = styled.h2`
  margin: 0;
  margin-bottom: 15px;

  font-size: 20px;
  letter-spacing: 1px;

  @media screen and (min-width: 720px) {
    font-size: 28px;
  }
`;

export const CardPageAuthors = styled.p`
  margin: 0;
  margin-bottom: 15px;

  color: #8b8b8b;
  font-size: 16px;
  text-decoration: underline;

  @media screen and (min-width: 720px) {
    margin-bottom: 35px;
  }
`;

export const CardPageDescription = styled.p`
  margin: 0;
  padding: 15px;
  min-height: 35vh;

  font-size: 16px;

  border: 1px solid #d5d3d3;
`;