export const CATEGORIES: string[] = ["all", "art", "biography", "computers", "history", "medical", "poetry"];

export const SORT_TYPES: string[] = ["relevance", "newest"];

export enum LABEL_ID {
  FILTER = "filter",
  SORT = "sort"
}

export enum LOADING_STATUS {
  ONLOAD = "Идет загрузка...",
  ONERROR = "Произошла ошибка:"
}

export const PAGINATION_NUMBER: number = 30;
