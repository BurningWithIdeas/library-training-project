import { ADD_BOOKS } from "../utils/ActionTypes";

export const addBooksAction = (booksArr: BooksArr) => ({
  type: ADD_BOOKS,
  payload: { booksArr },
});
