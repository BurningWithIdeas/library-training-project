import { GET_BOOKS, CLEAR_BOOKS_LIST } from 'Utils/ActionTypes';
import { GetBooksActionInterface, BooksState } from 'Utils/custom-types';
import booksReducer from '../books-reducer';

const payload: GetBooksActionInterface = {
  booksArr: [
    {
      id: '2',
      title: 'title',
      image: 'img',
      categories: ['category'],
      authors: ['author'],
    },
  ],

  totalBooks: 10,
};

const oldState: BooksState = {
  booksArr: [
    {
      id: '1',
      title: 'title',
      image: 'img',
      categories: ['category'],
      authors: ['author'],
    },
  ],
  totalBooks: 0,
};

const newState: BooksState = {
  booksArr: [
    {
      id: '1',
      title: 'title',
      image: 'img',
      categories: ['category'],
      authors: ['author'],
    },
    {
      id: '2',
      title: 'title',
      image: 'img',
      categories: ['category'],
      authors: ['author'],
    },
  ],
  totalBooks: 10,
};

const cleanState: BooksState = {
  booksArr: [],
  totalBooks: 0,
};

const getBooksAction = {
  type: GET_BOOKS,
  payload,
};

const clearBooksListAction = {
  type: CLEAR_BOOKS_LIST,
  payload: {},
};

test('reducer adds books', () => {
  expect(booksReducer(oldState, getBooksAction)).toStrictEqual(newState);
});

test('reducer clears books list', () => {
  expect(booksReducer(oldState, clearBooksListAction)).toStrictEqual(cleanState);
});
