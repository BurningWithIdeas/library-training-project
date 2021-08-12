import { GET_BOOKS, ASYNC_GET_BOOKS, CLEAR_BOOKS_LIST } from 'Utils/ActionTypes';
import { BooksArr } from 'Utils/custom-types';

interface GetBooksActionInterface {
  booksArr: BooksArr;
  totalBooks: number;
}

export const getBooksActionCreator = ({ booksArr, totalBooks }: GetBooksActionInterface) => ({
  type: GET_BOOKS,
  payload: { booksArr, totalBooks },
});

export const getBooksAsyncActionCreator = () => ({
  type: ASYNC_GET_BOOKS,
  payload: {},
});

export const clearBooksListActionCreator = () => ({
  type: CLEAR_BOOKS_LIST,
  payload: {},
});
