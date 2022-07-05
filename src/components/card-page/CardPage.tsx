import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Header from "../header/Header";
import FetchedMessageContainer from "../fetched-message-container/FetchedMessageContainer";
import CardPageContentContainer from "../card-page-content-container/CardPageContentContainer";

import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { fetchBook } from "../../store/reducers/ActionCreator";
import { LOADING_STATUS } from "../../constants";

const CardPage = () => {
  const { activeBook, error, isLoading } = useAppSelector(state => state.bookReducer);
  const { id } = useParams<string>();
  const dispatch = useAppDispatch();

  useEffect(() => {
     if (id) dispatch(fetchBook(id));
  }, [dispatch, id]);

  const getCardPageContentView = (isLoading: boolean) => {
    if (error.length === 0) {
      if (isLoading) {
        return <FetchedMessageContainer message={LOADING_STATUS.ONLOAD} />;
      } else if (activeBook) {
        return <CardPageContentContainer />;
      }
    } else {
      return <FetchedMessageContainer message={`${LOADING_STATUS.ONERROR} ${error}`} />;
    }
  };

  return (
    <>
      <Header />
      { getCardPageContentView(isLoading) }
    </>
  );
};

export default CardPage;