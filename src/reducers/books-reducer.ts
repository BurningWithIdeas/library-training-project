import { GET_BOOKS, CLEAR_BOOKS_LIST } from "Utils/actionTypes";
import produce from "immer";

let initState: BooksState = {
  booksArr: [
    {
      id: "0",
      title: "string",
      image: "string",
      categories: ["category"],
      authors: ["author"],
    },
    {
      id: "1",
      title: "string",
      image: "string",
      categories: ["category"],
      authors: ["author"],
    },
  ],
  totalBooks: 0,
};

const booksReducer = (state = initState, action: Action) => {
  let stateCopy: BooksState;

  switch (action.type) {
    case GET_BOOKS:
      stateCopy = produce(state, (newState: BooksState) => {
        newState.booksArr.push(...action.payload.booksArr);
        newState.totalBooks = action.payload.totalBooks;
      });

      return stateCopy;

    case CLEAR_BOOKS_LIST:
      stateCopy = produce(state, (newState: BooksState) => {
        newState.booksArr = [];
        newState.totalBooks = 0;
      });

      return stateCopy;
    default:
      return state;
  }
};

export default booksReducer;
