import React, { useState } from "react";
import { batch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { CATEGORIES, SORT_TYPES, LABEL_ID } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchBooks } from "../../store/reducers/ActionCreator";
import { bookSlice } from "../../store/reducers/BookSlice";
import { inputSlice } from "../../store/reducers/InputSlice";

import { HeaderStyled, PageHeading, SearchInputContainer, SearchInput,
  DataAppearanceControlContainer, ControlLabel, ControlSelect, SearchInputControlContainer,
  SeartchSubmitButton, ControlContainer, HeaderHomeLink } from "./header-styled-components";

const Header = () => {
  const navigate = useNavigate();
  const { sortType, filterType, query } = useAppSelector(state => state.inputReducer);
  const [input, setInput] = useState<string>(query);
  const { startIndex, isLoading } = useAppSelector(state => state.bookReducer);
  const { changeInputQuery, changeSortType, changeFilterType, resetInputSlice } = inputSlice.actions;
  const { clearBooks, zeroStartIndex, resetBookSlice, resetActiveBook  } = bookSlice.actions;
  const dispatch = useAppDispatch();

  const optionChangeHandler = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const selectType = evt.target.id;
    
    switch (selectType) {
      case LABEL_ID.FILTER:
        dispatch(changeFilterType(evt.target.value));

        break;

      case LABEL_ID.SORT:
        dispatch(changeSortType(evt.target.value));

        break;
    };
  };

  const getSelectElement = (options: string[], labelId: string, value: string) => {
    return (
      <ControlSelect id={labelId} onChange={optionChangeHandler} 
        disabled={isLoading ? true : false} value={value}>
        { options.map((it, index): React.ReactNode => {
          return <option key={`option-${labelId}-${index}`} value={it}>{it}</option>;
        }) }
      </ControlSelect>
    );
  };

  const searchInputChangeHandler = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInput(evt.target.value);
  };

  const inputDispatchBatch = () => {
    batch(() => {
      dispatch(clearBooks());
      dispatch(changeInputQuery(input));
      dispatch(fetchBooks(input, filterType, sortType, startIndex));
      dispatch(zeroStartIndex());
    });
  };

  const searchSubmitButtonClickHandler = () => {
    if (input.length !== 0) {
      inputDispatchBatch();
      dispatch(resetActiveBook());
      navigate("/");
    }
  };

  const searchInputKeydownHandler = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === "Enter") {
      if (input.length !== 0) {
        inputDispatchBatch();
        dispatch(resetActiveBook());
        navigate("/");
      }
    }
  };

  const homeLinkClickHandler = () => {
    dispatch(resetBookSlice());
    dispatch(resetInputSlice());
    setInput("");
  };

  return (
    <HeaderStyled>
      <PageHeading>
        <HeaderHomeLink to={"/"} onClick={homeLinkClickHandler}>Search for books</HeaderHomeLink>
      </PageHeading>
      <SearchInputContainer>
        <SearchInputControlContainer>
          <SearchInput type="text" placeholder="Enter book name" value={input}
            onChange={searchInputChangeHandler} onKeyDown={searchInputKeydownHandler} disabled={isLoading ? true : false}/>
          <SeartchSubmitButton type="button" onClick={searchSubmitButtonClickHandler} disabled={isLoading ? true : false} />
        </SearchInputControlContainer>
        <DataAppearanceControlContainer>
          <ControlContainer>
            <ControlLabel htmlFor={LABEL_ID.FILTER}>Categories</ControlLabel>
            { getSelectElement(CATEGORIES, LABEL_ID.FILTER, filterType) }
          </ControlContainer>
          <ControlContainer>
            <ControlLabel htmlFor={LABEL_ID.SORT}>Sorting by</ControlLabel>
            { getSelectElement(SORT_TYPES, LABEL_ID.SORT, sortType) }
          </ControlContainer>
        </DataAppearanceControlContainer>
      </SearchInputContainer>
    </HeaderStyled>
  );
};

export default Header;