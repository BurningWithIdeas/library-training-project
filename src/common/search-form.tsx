import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import {
  getBooksAsyncActionCreator,
  clearBooksListActionCreator,
} from 'Actions/books-actions';
import { setFilters } from 'API/google-books';
import LabeledField from './components/labeled-field';
import SearchField from './components/search-field';
import './search-form.scss';

const SearchForm = () => {
  const dispatch = useDispatch();

  const categoriesArr = [
    'all',
    'art',
    'biography',
    'computers',
    'history',
    'medical',
    'poetry',
  ];
  const categoryOptionsArr = categoriesArr.map((e) => (
    <option key={e} value={e}>
      {e}
    </option>
  ));

  const sortByVariantsArr = ['relevance', 'newest'];
  const sortByVariantOptionsArr = sortByVariantsArr.map((e) => (
    <option key={e} value={e}>
      {e}
    </option>
  ));

  return (
    <section className="search-form-container-wrapper">
      <div className="search-form-container">
        <h2 className="search-form-container__title">Search for books</h2>
        <Formik
          initialValues={{ title: '', category: 'all', sortBy: 'relevance' }}
          onSubmit={(data) => {
            dispatch(clearBooksListActionCreator());
            setFilters(data);
            dispatch(getBooksAsyncActionCreator());
          }}
        >
          {({ handleSubmit }) => (
            <form className="search-form" onSubmit={handleSubmit}>
              <SearchField
                name="title"
                placeholder="Type Book Name here..."
                required
              />
              <div className="search-form-filters">
                <LabeledField as="select" name="category" label="Category">
                  {categoryOptionsArr}
                </LabeledField>

                <LabeledField as="select" name="sortBy" label="Sorting By">
                  {sortByVariantOptionsArr}
                </LabeledField>
              </div>
            </form>
          )}
        </Formik>
      </div>
      <div className="search-form-bg" />
    </section>
  );
};

export default SearchForm;
