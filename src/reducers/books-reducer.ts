import { GET_BOOKS, CLEAR_BOOKS_LIST } from 'Utils/ActionTypes';
import { BooksState, Action } from 'Utils/custom-types';
import produce from 'immer';

const initState: BooksState = {
  booksArr: [],
  totalBooks: 0,
};

const booksReducer = (state = initState, action: Action) => {
  let stateCopy: BooksState;

  switch (action.type) {
    case GET_BOOKS:
      stateCopy = produce(state, (newState: BooksState) => {
        newState.booksArr.push(...action.payload.booksArr);
        // eslint-disable-next-line no-param-reassign
        newState.totalBooks = action.payload.totalBooks;
      });

      return stateCopy;

    case CLEAR_BOOKS_LIST:
      stateCopy = produce(state, (newState: BooksState) => {
        /* eslint-disable no-param-reassign */
        newState.booksArr = [];
        newState.totalBooks = 0;
        /* eslint-enable no-param-reassign */
      });

      return stateCopy;
    default:
      return state;
  }
};

export default booksReducer;
