import {
  GET_BOOKS,
  ASYNC_GET_BOOKS,
  CLEAR_BOOKS_LIST,
} from "../utils/actionTypes";

export const getBooksActionCreator = ({
  booksArr,
  totalBooks,
}: GetBooksActionInterface) => {
  return {
    type: GET_BOOKS,
    payload: { booksArr, totalBooks },
  };
};

export const getBooksAsyncActionCreator = () => ({
  type: ASYNC_GET_BOOKS,
  payload: {},
});

export const clearBooksListActionCreator = () => ({
  type: CLEAR_BOOKS_LIST,
  payload: {},
});
