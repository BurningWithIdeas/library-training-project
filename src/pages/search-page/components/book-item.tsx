import React from "react";
import { Link } from "react-router-dom";
import "./book-item.scss";

const BookItem = (book: Book) => {
  return (
    <Link to={`/search/${book.id}`}>
      <div className="book-item">
        <img
          src={book.image}
          alt="Image missing"
          className="book-item__image"
        />
        <span className="book-item__label book-item__category">
          {book.categories}
        </span>
        <span className="book-item__label book-item__name">{book.title}</span>
        <span className="book-item__label book-item__autor">
          {book.authors}
        </span>
      </div>
    </Link>
  );
};

export default BookItem;
