import styled, { keyframes } from "styled-components";

const loaderAnimation = keyframes`
  to {
    transform: rotate(360deg); 
  } 
`;

const LoaderStyled = styled.div`
  &:before {
    content: '';

    display: block;
    height: 50px;
    width: 50px;

    border: 6px #000 solid;
    border-left-color: #fff;
    border-radius: 100%; 

    animation: ${loaderAnimation} .5s infinite linear;
  }
`;

const Loader = () => {
  return <LoaderStyled />;
};

export default Loader;