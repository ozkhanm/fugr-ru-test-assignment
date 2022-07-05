import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputState {
    query: string;
    sortType: string;
    filterType: string;
};

const initialState: InputState = {
    query: "",
    sortType: "relevance",
    filterType: "all"
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    changeInputQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    changeFilterType(state, action: PayloadAction<string>) {
      state.filterType = action.payload;
    },
    changeSortType(state, action: PayloadAction<string>) {
      state.sortType = action.payload;
    },
    resetInputSlice(state) {
      state.query = "";
      state.sortType = "relevance";
      state.filterType = "all";
    }
  }
});

export default inputSlice.reducer;