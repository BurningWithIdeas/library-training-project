import React from "react";
import BookItem from "./book-item";
import "./books-list.scss";

interface BooksListCompProps {
  booksArr: BooksArr;
  getBooksAsyncActionCreator(): void;
}

const BooksList = ({
  booksArr,
  getBooksAsyncActionCreator,
}: BooksListCompProps) => {
  const BookItems = booksArr.map((book: Book) => {
    return <BookItem {...book} key={book.id} />;
  });

  return (
    <div className="books-list-wrapper">
      <span className="books-list-wrapper__label">Found 1337 results</span>
      <div className="books-list">{BookItems}</div>
      <button
        className="books-list-wrapper__button"
        onClick={() => getBooksAsyncActionCreator()}
      >
        Show more
      </button>
    </div>
  );
};

export default BooksList;
