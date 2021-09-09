import React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'Utils/custom-types';
import ItemDescription from './components/item-description';

const ItemPage = ({ match }: any) => {
  const id = match.params.item;
  const booksArr = useSelector((state: State) => state.books.booksArr);
  const currentBook = booksArr.find((el) => el.id === id);

  return (
    <div className="item-page">
      <ItemDescription {...currentBook} />
    </div>
  );
};

export default ItemPage;
