import React from "react";
import { BsSearch } from "react-icons/bs";
import { SearchFormContainer } from "./styles";

const SearchForm = () => {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Search transaction" />
      <button type="submit">
        <BsSearch />
        Search
      </button>
    </SearchFormContainer>
  );
};

export default SearchForm;
