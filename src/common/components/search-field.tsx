import React from 'react';
import { BsSearch } from 'react-icons/bs';
import Field from './field';
import './search-field.scss';

const SearchField = (props: any) => (
  <div className="search-field">
    <Field {...props} />
    <button className="search-field__button" type="submit">
      <BsSearch />
    </button>
  </div>
);

export default SearchField;
