import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStyled = styled.header`
  padding-top: 20px;
  padding-left: 15%;
  padding-right: 15%;
  padding-bottom: 20px;

  background-color: #3d3d3d;
`;

export const PageHeading = styled.h1`
  margin: 0;
  margin-bottom: 15px;

  color: #fff;
  font-size: 26px;
  text-align: center;

  @media screen and (min-width: 720px) {
    font-size: 36px;
  }
`;

export const SearchInputContainer = styled.div`
`;

export const SearchInput = styled.input`
  padding-left: 10px;
  width: 100%;
  max-width: 440px;
  min-height: 30px;

  outline: 0;

  box-sizing: border-box;
`;

export const DataAppearanceControlContainer = styled.div`
  @media screen and (min-width: 720px) {
    display: flex;
    justify-content: center;
  }
`;

export const ControlLabel = styled.label`
  font-size: 20px;
  color: #fff;

  @media screen and (min-width: 720px) {
    margin-right: 10px;
  }
`;

export const ControlSelect = styled.select`
  padding-left: 10px;
  margin-right: 25px;
  width: 65%;
  min-height: 30px;

  color: #706e6e;

  &:last-child {
    margin-right: 0;
  }

  @media screen and (min-width: 720px) {
    width: 140px;
  }
`;

export const SearchInputControlContainer = styled.div`
  position: relative;
  
  margin-bottom: 15px;

  text-align: center;
`;

export const SeartchSubmitButton = styled.button`
  position: absolute;
  top: 7%;

  width: 25px;
  height: 25px;
  margin-left: -35px;

  border: 0;
  background-color: rgba(256,256,256, 0);
  background-image: url("data:image/svg+xml;charset=UTF-8,<svg enable-background='new 0 0 32 32' id='Glyph' version='1.1' viewBox='0 0 32 32' xmlSpace='preserve' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'><path d='M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z' id='XMLID_223_'/></svg>");
`;

export const ControlContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 720px) {
    flex-direction: row;
    margin-bottom: 0;
    margin-right: 15px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const HeaderHomeLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:active {
    color: #000;
  }
`;