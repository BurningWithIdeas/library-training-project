interface State {
  books: BooksState;
}

interface BooksState {
  booksArr: BooksArr;
}

interface Book {
  id: string;
  name: string;
  image: object;
  category: Array<string>;
  autor: Array<string>;
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

//Props

// interface TemplateItemComp {
//   templateArr: TemplateArr;
//   templateAction: (id: number) => {};
// }
