export interface IImageLink {
  extraLarge: string;
  large: string;
  medium: string;
  small: string;
  smallThumbnail: string;
  thumbnail: string;
};

export interface IBook {
  imageLinks?: IImageLink;
  title: string;
  categories?: string[];
  authors?: string[];
  description?: string;
  id: string;
};

export interface IBookRaw {
  id: string;
  volumeInfo: {
    imageLinks?: IImageLink;
    title: string;
    categories?: string[];
    authors?: string[];
  };
};

export interface IBookFetch {
  items?: IBookRaw[];
  totalItems: number;
};