import createSagaMiddleware from 'redux-saga';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import watchGetBooks from 'Middleware/saga';
import booksReducer from './reducers/books-reducer';
import { configureStore } from '@reduxjs/toolkit';

const sageMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  books: booksReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sageMiddleware),
});

// const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(sageMiddleware)));

sageMiddleware.run(watchGetBooks);

export default store;
