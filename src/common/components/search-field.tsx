import React from "react";

import Field from "./field";
import { BsSearch } from "react-icons/bs";
import "./search-field.scss";

const SearchField = (props: any) => {
  return (
    <div className="search-field">
      <Field {...props} />

      <button className="search-field__button" type="submit">
        <BsSearch />
      </button>
    </div>
  );
};

export default SearchField;
