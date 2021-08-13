export interface State {
  books: BooksState;
}

export interface BooksState {
  booksArr: BooksArr;
  totalBooks: number;
}

export interface Book {
  id: string;
  title: string;
  image: string;
  categories: Array<string>;
  authors: Array<string>;
}

export type BooksArr = Array<Book>;

export interface BooksSearchFilters {
  title: string;
  category: string;
  sortBy: string;
}

//Actions

export interface Action {
  type: string;
  payload: {
    booksArr?: BooksArr;
    totalBooks?: number;
  };
}

export interface GetBooksActionInterface {
  booksArr: BooksArr;
  totalBooks: number;
}
