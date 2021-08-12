import { takeLatest, put, call } from 'redux-saga/effects';
import { requestBooks } from 'API/google-books';
import { ASYNC_GET_BOOKS } from 'Utils/ActionTypes';
import { getBooksActionCreator } from '../actions/books-actions';

function* asyncGetBooks() {
  try {
    const response = yield call(requestBooks);
    const totalBooks = response.data.totalItems;
    const booksArr = response.data.items.map((el: any) => ({
      id: el.id,
      title: el.volumeInfo.title,
      image: el.volumeInfo.imageLinks.smallThumbnail,
      categories: el.volumeInfo.categories,
      authors: el.volumeInfo.authors,
    }));

    yield put(getBooksActionCreator({ booksArr, totalBooks }));
  } catch (e) {
    console.log(e);
  }
}

export default function* watchGetBooks() {
  yield takeLatest(ASYNC_GET_BOOKS, asyncGetBooks);
}
