import React from 'react';
import SearchForm from 'Common/search-form';
import BooksList from './components/books-list';

const SearchPage = () => (
  <div className="search-page">
    <SearchForm />
    <BooksList />
  </div>
);

export default SearchPage;
