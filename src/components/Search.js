import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../store/articlesSlice";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    dispatch(setSearch(e.target.value));
  };

  return (
    <form
      className="d-flex align-items-center m-3 w-50"
      onSubmit={handleSearchChange}
    >
      <input
        type="text"
        placeholder="Search"
        style={{ fontSize: "1rem" }}
        className=" form-input"
        value={searchValue}
        onChange={handleSearchChange}
      />
    </form>
  );
};

export default Search;
