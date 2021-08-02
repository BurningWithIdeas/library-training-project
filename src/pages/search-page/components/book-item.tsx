import React from "react";
import Img1 from "Assets/book1.jpg";
import "./book-item.scss";

const BookItem = (book: Book) => {
  return (
    <div className="book-item">
      <img src={book.image} alt="Image missing" className="book-item__image" />
      <span className="book-item__label book-item__category">
        {book.categories}
      </span>
      <span className="book-item__label book-item__name">{book.title}</span>
      <span className="book-item__label book-item__autor">{book.authors}</span>
    </div>
  );
};

export default BookItem;
