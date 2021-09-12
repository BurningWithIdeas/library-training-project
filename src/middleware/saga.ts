import { takeLatest, put, call } from 'redux-saga/effects';
import { requestBooks } from 'API/google-books';
import { setBooks, getBooks } from 'Reducers/books-reducer';

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

    yield put(setBooks({ booksArr, totalBooks }));
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
}

export default function* watchGetBooks() {
  yield takeLatest(getBooks.type, asyncGetBooks);
}
