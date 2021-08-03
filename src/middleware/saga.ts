import { takeLatest, put, call } from "redux-saga/effects";
import { ASYNC_GET_BOOKS } from "../utils/actionTypes";
import { getBooksActionCreator } from "../actions/books-actions";
import { booksRequest } from "API/google-books";

function* asyncGetBooks() {
  try {
    const response = yield call(booksRequest);
    const totalBooks = response.data.totalItems;
    const booksArr = response.data.items.map((el: any) => {
      return {
        id: el.id,
        title: el.volumeInfo.title,
        image: el.volumeInfo.imageLinks.smallThumbnail,
        categories: el.volumeInfo.categories,
        authors: el.volumeInfo.authors,
      };
    });

    yield put(getBooksActionCreator({ booksArr, totalBooks }));
  } catch (e) {
    console.log(e);
  }
}

export function* watchGetBooks() {
  yield takeLatest(ASYNC_GET_BOOKS, asyncGetBooks);
}
