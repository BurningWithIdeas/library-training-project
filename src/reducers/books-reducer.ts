import { GET_BOOKS, CLEAR_BOOKS_LIST } from "Utils/actionTypes";
import produce from "immer";

let initState: BooksState = {
  booksArr: [],
  totalBooks: 0,
};

const templateReducer = (state = initState, action: Action) => {
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
      });

      return stateCopy;
    default:
      return state;
  }
};

export default templateReducer;
