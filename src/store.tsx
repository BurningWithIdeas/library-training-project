import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import watchGetBooks from 'Middleware/saga';
import booksReducer from './reducers/books-reducer';

const sageMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  books: booksReducer,
});

const store = createStore(reducers, {}, applyMiddleware(sageMiddleware));

sageMiddleware.run(watchGetBooks);

export default store;
