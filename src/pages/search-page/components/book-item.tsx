import React from "react";
import Img1 from "Assets/book1.jpg";
import "./book-item.scss";

const BookItem = (book: Book) => {
  return (
    <div className="book-item">
      <img src={Img1} alt="Image missing" className="book-item__image" />
      <span className="book-item__label book-item__category">
        {book.category[0]}
      </span>
      <span className="book-item__label book-item__name">{book.name}</span>
      <span className="book-item__label book-item__autor">{book.autor[0]}</span>
    </div>
  );
};

export default BookItem;
