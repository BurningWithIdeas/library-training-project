import React from 'react';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearBooksList, getBooks } from 'Reducers/books-reducer';
import { setFilters } from 'API/google-books';
import LabeledField from './components/labeled-field';
import SearchField from './components/search-field';
import './search-form.scss';

const SearchForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const categoriesArr = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'];
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
          validate={(values) => {
            const errors: Record<string, string> = {};

            if (values.title.length > 15) {
              errors.title = 'Title is too long';
            }

            return errors;
          }}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            dispatch(clearBooksList());
            setFilters(data);
            dispatch(getBooks());
            history.push('/search');
            setSubmitting(false);
          }}
        >
          {({ handleSubmit, isSubmitting }) => (
            <form className="search-form" onSubmit={handleSubmit}>
              <SearchField
                name="title"
                placeholder="Type Book Name here..."
                required
                isDisabled={isSubmitting}
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
