import React from 'react';
import { Book } from 'Utils/custom-types';
import './book-item.scss';

const BookItem = ({ image, categories, title, authors }: Book) => (
  <div className="book-item">
    <img src={image} alt="Book item" className="book-item__image" />
    <span className="book-item__label book-item__category">{categories}</span>
    <span className="book-item__label book-item__name">{title}</span>
    <span className="book-item__label book-item__autor">{authors}</span>
  </div>
);

export default BookItem;
// eslint-disable-next-line no-use-before-define
