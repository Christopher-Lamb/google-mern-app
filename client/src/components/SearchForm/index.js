import React, { useState } from "react";

function SearchForm() {
  const [searchState, setSearchState] = useState({
    search: "",
  });
  const [inputState, setInputState] = useState({
    input: "",
  });

  const handleInputChange = (event) => {
    const { value } = event.target;
    setInputState({ ...inputState, input: value });
  };

  return (
    <form>
      <input onChange={handleInputChange} name="search" type="text"></input>
      <button
        onClick={(event) => {
          event.preventDefault();
          setSearchState({ ...searchState, search: inputState });
        }}
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
