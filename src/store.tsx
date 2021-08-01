import { createStore, combineReducers } from "redux";
import booksReducer from "./reducers/books-reducer";

const reducers = combineReducers({
  books: booksReducer,
});

const store = createStore(reducers);

export default store;
