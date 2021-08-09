import { getBooksActionCreator } from "Actions/books-actions";
import { GET_BOOKS, CLEAR_BOOKS_LIST } from "Utils/actionTypes";
import produce from "immer";
import booksReducer from "../books-reducer";

let payload: GetBooksActionInterface = {
  booksArr: [
    {
      id: "2",
      title: "title",
      image: "img",
      categories: ["category"],
      authors: ["author"],
    },
  ],

  totalBooks: 10,
};

let oldState: BooksState = {
  booksArr: [
    {
      id: "1",
      title: "title",
      image: "img",
      categories: ["category"],
      authors: ["author"],
    },
  ],
  totalBooks: 0,
};

let newState: BooksState = {
  booksArr: [
    {
      id: "1",
      title: "title",
      image: "img",
      categories: ["category"],
      authors: ["author"],
    },
    {
      id: "2",
      title: "title",
      image: "img",
      categories: ["category"],
      authors: ["author"],
    },
  ],
  totalBooks: 10,
};

let cleanState: BooksState = {
  booksArr: [],
  totalBooks: 0,
};

let getBooksAction = {
  type: GET_BOOKS,
  payload: payload,
};

let clearBooksListAction = {
  type: CLEAR_BOOKS_LIST,
  payload: {},
};

test("reducer adds books", () => {
  expect(booksReducer(oldState, getBooksAction)).toStrictEqual(newState);
});

test("reducer clears books list", () => {
  expect(booksReducer(oldState, clearBooksListAction)).toStrictEqual(
    cleanState
  );
});
