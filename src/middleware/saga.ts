import { takeLatest, put, call } from "redux-saga/effects";
import { ASYNC_GET_BOOKS } from "../utils/actionTypes";
import { getBooksActionCreator } from "../actions/books-actions";
import asyncGetBooksHandler from "API/google-books";

function* asyncGetBooks() {
  try {
    const response = yield call(asyncGetBooksHandler);
    const newBooksArr = response.data.items.map((el: any) => {
      return {
        id: el.id,
        title: el.volumeInfo.title,
        image: el.volumeInfo.imageLinks.smallThumbnail,
        categories: el.volumeInfo.categories,
        authors: el.volumeInfo.authors,
      };
    });

    yield put(getBooksActionCreator(newBooksArr));
  } catch (e) {
    console.log(e);
  }
}

export function* watchGetBooks() {
  yield takeLatest(ASYNC_GET_BOOKS, asyncGetBooks);
}
