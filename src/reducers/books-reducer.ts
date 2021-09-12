import { createSlice } from '@reduxjs/toolkit';

const booksSlice = createSlice({
  name: 'booksReducer',
  initialState: {
    booksArr: [],
    totalBooks: 0,
  },
  reducers: {
    getBooks() {},
    setBooks(state, action) {
      state.booksArr.push(...action.payload.booksArr);
      state.totalBooks = action.payload.totalBooks;
    },
    clearBooksList(state) {
      state.booksArr = [];
      state.totalBooks = 0;
    },
  },
});

export default booksSlice.reducer;
export const { setBooks, getBooks, clearBooksList } = booksSlice.actions;
