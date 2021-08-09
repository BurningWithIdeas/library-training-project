interface State {
  books: BooksState;
}

interface BooksState {
  booksArr: BooksArr;
  totalBooks: number;
}

interface Book {
  id: string;
  title: string;
  image: string;
  categories: Array<string>;
  authors: Array<string>;
}

type BooksArr = Array<Book>;

interface BooksSearchFilters {
  title: string;
  category: string;
  sortBy: string;
}

//Actions

interface Action {
  type: string;
  payload: {
    booksArr?: BooksArr;
    totalBooks?: number;
  };
}

interface GetBooksActionInterface {
  booksArr: BooksArr;
  totalBooks: number;
}