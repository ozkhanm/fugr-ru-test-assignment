import axios, { AxiosInstance, AxiosResponse } from "axios";

import { PAGINATION_NUMBER } from "./constants";
import { IBookRaw, IBookFetch } from "./models/IBook";

const api: AxiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes/",
  timeout: 10000
});

const responseBody = (response: AxiosResponse) => response.data;

const getBooks = async (query: string, filterType: string, sortType: string, startIndex: number) => {
  const response = await api.get<AxiosResponse>(`?q=${query}${`+subject=${filterType}`}&startIndex=${startIndex}&orderBy=${sortType}&maxResults=${PAGINATION_NUMBER}&fields=totalItems,items(id,volumeInfo/description,volumeInfo/title,volumeInfo/authors,volumeInfo/categories,volumeInfo/imageLinks)&key=${process.env.REACT_APP_API_KEY}`);
  const responseData: IBookFetch = responseBody(response);
  const totalItems = responseData.totalItems;
  const books = responseData.items ? responseData.items.map((it: IBookRaw, index: number) => {
    const { id } = it;
    const { authors, categories, imageLinks, title } = it.volumeInfo;

    return {
      imageLinks,
      title,
      categories,
      authors,
      id
    };
  }) :
  [];

  return {books, totalItems};
};

const getBook = async (bookId: string) => {
  const response = await api.get<AxiosResponse>(`${bookId}?key=${process.env.REACT_APP_API_KEY}`);
  const responseData = responseBody(response);
  const { volumeInfo: { imageLinks, title, categories, authors, description }, id } = responseData;
  const book = {
    imageLinks,
    title,
    categories,
    authors,
    description,
    id
  };

  return book;
};

export {api, getBooks, getBook};