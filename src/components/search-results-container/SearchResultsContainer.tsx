import Card from "../card/Card";
import FetchedMessageContainer from "../fetched-message-container/FetchedMessageContainer";

import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { fetchBooks } from "../../store/reducers/ActionCreator";
import { LOADING_STATUS } from "../../constants";

import { FindResultBlock, CardsContainer, MainContentContainer, LoadMoreButton} from "./search-results-container-styled-components";

const SearchResultsContainer = () => {
  const { books, isLoading, error, totalResults, startIndex } = useAppSelector(state => state.bookReducer);
  const { query, sortType, filterType } = useAppSelector(state => state.inputReducer);
  const dispatch = useAppDispatch();
  
  const loadMoreButtonClickHandler = () => {
    dispatch(fetchBooks(query, filterType, sortType, startIndex));
  };

  const getLoadMoreButton = (currentIndex: number, elementsLength: number) => {
    if (currentIndex < elementsLength) {
      if (isLoading) {
        return <FetchedMessageContainer message={LOADING_STATUS.ONLOAD} />;
      } else {
        return startIndex < totalResults ? <LoadMoreButton type="button" onClick={loadMoreButtonClickHandler}>Load more</LoadMoreButton> : null;
      }
    } else {
      return null;
    }
  };

  const getContainerView = (isLoading: boolean) => {
    if (error.length === 0) {
      if (isLoading && startIndex === 0) {
        return <FetchedMessageContainer message={LOADING_STATUS.ONLOAD} />;
      } else if (query.length !== 0) {
        return (
          <>
            <FindResultBlock>Found {totalResults} results</FindResultBlock>
            <CardsContainer>
              { books.map((bookData) => <Card key={bookData.id} data={bookData} />) }
            </CardsContainer>
            { getLoadMoreButton(startIndex, totalResults) }
          </>
        );
      }
    } else {
      return <FetchedMessageContainer message={`${LOADING_STATUS.ONERROR} ${error}`} />;
    }
  };

  return (
    <MainContentContainer>
      { getContainerView(isLoading) }
    </MainContentContainer>
  );
};

export default SearchResultsContainer;