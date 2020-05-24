import React from "react";
const style = {
  input: {
    width: "150px",
  },
};
export const SearchBar = () => {
  return (
    <form class="form-inline my-2 my-lg-0">
      <input
        style={style.input}
        class="form-control input-group-sm mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button class="btn btn-outline-success btn-sm my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
};
