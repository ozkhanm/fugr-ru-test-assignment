import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IBook } from "../../models/IBook";
import { PAGINATION_NUMBER } from "../../constants";

interface BookState {
  books: IBook[];
  isLoading: boolean;
  error: string;
  totalResults: number;
  startIndex: number;
  activeBook: IBook | null;
};

interface BooksPayload {
  books: IBook[],
  totalItems: number
};

const initialState: BookState = {
  books: [],
  isLoading: false,
  error: "",
  totalResults: 0,
  startIndex: 0,
  activeBook: null
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    booksFetching(state) {
      state.isLoading = true;
    },
    booksFetchingSuccess(state, action: PayloadAction<BooksPayload>) {
      state.isLoading = false;
      state.books = [...state.books, ...action.payload.books];
      state.totalResults = action.payload.totalItems;
      state.error = "";
    },
    bookFetchingSuccess(state, action: PayloadAction<IBook>) {
      state.isLoading = false;
      state.activeBook = action.payload;
      state.error = "";
    },
    booksFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    incrementStartIndex(state) {
      state.startIndex += PAGINATION_NUMBER;
    },
    clearBooks(state) {
      state.books = []
    },
    zeroStartIndex(state) {
      state.startIndex = 0;
    },
    resetBookSlice(state) {
      state.books = [];
      state.error = "";
      state.totalResults = 0;
      state.startIndex = 0;
      state.activeBook = null;
    },
    resetActiveBook(state) {
      state.activeBook = null;
    }
  }
});

export default bookSlice.reducer;