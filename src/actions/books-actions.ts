import { GET_BOOKS, ASYNC_GET_BOOKS } from "../utils/actionTypes";
import getBooks from "../api/google-books";

export const getBooksActionCreator = (booksArr: BooksArr) => {
  getBooks();

  return {
    type: GET_BOOKS,
    payload: { booksArr },
  };
};

export const getBooksAsyncActionCreator = () => ({
  type: ASYNC_GET_BOOKS,
  payload: {},
});
