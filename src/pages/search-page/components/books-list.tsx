import React from "react";
import { useSelector, useDispatch } from "react-redux";
import BookItem from "./book-item";
import { getBooksAsyncActionCreator } from "Actions/books-actions";
import "./books-list.scss";

const BooksList = () => {
  const booksArr = useSelector((state: State) => state.books.booksArr);
  const totalBooks = useSelector((state: State) => state.books.totalBooks);
  const dispatch = useDispatch();

  const BookItems = booksArr.map((book: Book) => {
    return <BookItem {...book} key={book.id} />;
  });

  return (
    <div className="books-list-wrapper">
      <span className="books-list-wrapper__label">
        Found {totalBooks} results
      </span>
      <div className="books-list">{BookItems}</div>
      {BookItems.length > 0 ? (
        <button
          className="books-list-wrapper__button"
          onClick={() => dispatch(getBooksAsyncActionCreator())}
        >
          Show more
        </button>
      ) : null}
    </div>
  );
};

export default BooksList;
