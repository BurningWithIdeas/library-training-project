interface State {
  books: BooksState;
}

interface BooksState {
  booksArr: BooksArr;
}

interface Book {
  id: string;
  title: string;
  image: string;
  categories: Array<string>;
  authors: Array<string>;
}

type BooksArr = Array<Book>;

//Actions

interface Action {
  type: string;
  payload: {
    booksArr?: BooksArr;
  };
}

interface ProductActions {
  templateAction?: (id: number) => {};
}
