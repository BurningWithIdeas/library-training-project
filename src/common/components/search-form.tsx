import React from "react";
import { Formik } from "formik";
import Field from "./field";
import LabeledField from "./labeled-field";
import SearchField from "./search-field";
import "./search-form.scss";

const SearchForm = () => {
  return (
    <section className="search-form-container-wrapper">
      <div className="search-form-container">
        <h2 className="search-form-container__title">Search for books</h2>
        <Formik
          initialValues={{ bookName: "", category: "all", sortBy: "relevance" }}
          onSubmit={(data) => {
            console.log(data);
          }}
        >
          {({ handleSubmit }) => (
            <form className="search-form" onSubmit={handleSubmit}>
              <SearchField name="bookName" />
              <div className="search-form-filters">
                <LabeledField name="category" label="Category" />
                <LabeledField name="sortBy" label="Sorting By" />
              </div>
            </form>
          )}
        </Formik>
      </div>
      <div className="search-form-bg"></div>
    </section>
  );
};

export default SearchForm;
