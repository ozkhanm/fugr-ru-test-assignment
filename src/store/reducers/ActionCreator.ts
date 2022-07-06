import { getBook, getBooks } from "../../api";
import { AppDispatch } from "../store";
import { bookSlice } from "./BookSlice";

const { booksFetching, booksFetchingSuccess, booksFetchingError,
  incrementStartIndex, bookFetchingSuccess} = bookSlice.actions;

export const fetchBooks = (query: string, filterType: string, sortType: string, startIndex: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(booksFetching());

    const response = await getBooks(query, filterType, sortType, startIndex);

    if (response.books.length !== 0) {
      dispatch(incrementStartIndex());
    }

    dispatch(booksFetchingSuccess(response));
  } catch (err) {
    dispatch(booksFetchingError(err.message));
  }
};

export const fetchBook = (id: string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(booksFetching());

    const response = await getBook(id);

    dispatch(bookFetchingSuccess(response));
  } catch (err) {
    dispatch(booksFetchingError(err.message));
  }
};