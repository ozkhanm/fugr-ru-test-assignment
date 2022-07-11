import React from "react";

import Loader from "../loader/Loader";

import { LOADING_STATUS } from "../../constants";

import { FetchedMessageBlock, FetchedMessage } from "./fetched-message-container-styled-components";

import { IFetchedMessageContainerProps } from "./models/IFetchedMessageContainerProps";

const FetchedMessageContainer: React.FC<IFetchedMessageContainerProps> = ({ message }) => {
  return (
    <FetchedMessageBlock>
      <FetchedMessage>{ message }</FetchedMessage>
      { message === LOADING_STATUS.ONLOAD ? <Loader/> : null }
    </FetchedMessageBlock>
  )
};

export default FetchedMessageContainer;
