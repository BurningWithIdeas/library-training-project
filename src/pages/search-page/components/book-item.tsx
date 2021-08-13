import React from 'react';
import { Book } from 'Utils/custom-types';
import { Link } from 'react-router-dom';
import './book-item.scss';

const BookItem = ({ id, image, categories, title, authors }: Book) => (
  <Link to={`/search/${id}`}>
    <div className="book-item">
      <img src={image} alt="Book" className="book-item__image" />
      <span className="book-item__label book-item__category">{categories}</span>
      <span className="book-item__label book-item__name">{title}</span>
      <span className="book-item__label book-item__autor">{authors}</span>
    </div>
  </Link>
);

export default BookItem;
