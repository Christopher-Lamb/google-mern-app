import React, { useState } from "react";

function SearchForm(props) {
  const [inputState, setInputState] = useState({
    input: "",
  });

  //Handle Btn Click

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
          props.onSearch(inputState.input);
        }}
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
