import React from "react";
import SearchForm from "Common/components/search-form";
import BooksList from "./components/books-list";

const SearchPage = () => {
  return (
    <div className="search-page">
      <SearchForm />
      <BooksList />
    </div>
  );
};

export default SearchPage;
