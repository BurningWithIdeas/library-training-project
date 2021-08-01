import React from "react";
import SearchForm from "Common/components/search-form";
import BooksList from "./components/books-list";
import { addBooksAction } from "../../actions/books-actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const mapStateToProps = (state: State) => ({
  booksArr: state.books.booksArr,
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators(
    {
      addBooksAction,
    },
    dispatch
  );

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
