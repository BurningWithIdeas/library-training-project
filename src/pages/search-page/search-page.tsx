import React from "react";
import SearchForm from "Common/components/search-form";
import BooksList from "./components/books-list";
import { getBooksAsyncActionCreator } from "../../actions/books-actions";
import { connect } from "react-redux";

const mapStateToProps = (state: State) => ({
  booksArr: state.books.booksArr,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getBooksAsyncActionCreator: () => dispatch(getBooksAsyncActionCreator()),
  };
};

const BooksListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BooksList);

const TemplateContainer = () => {
  return (
    <div className="search-page">
      <SearchForm />
      <BooksListContainer />
    </div>
  );
};

export default TemplateContainer;
