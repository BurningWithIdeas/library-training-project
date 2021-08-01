import React from "react";
import BookItem from "./book-item";
import "./books-list.scss";

const BooksList = ({ booksArr, addBooksAction }: any) => {
  const BookItems = booksArr.map((book: Book) => {
    return <BookItem {...book} />;
  });

  return (
    <div className="books-list-wrapper">
      <span className="books-list-wrapper__label">Found 1337 results</span>
      <div className="books-list">{BookItems}</div>
      <button className="books-list-wrapper__button">Show more</button>
    </div>
  );
};

export default BooksList;
