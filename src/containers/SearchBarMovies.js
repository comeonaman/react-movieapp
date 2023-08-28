import React from "react";
import Search from "../components/Suggestion";
import { useSelector } from "react-redux";

const SearchBarMovies = () => {
  const { search } = useSelector((store) => store);

  return <Search movies={search} />;
};

export default SearchBarMovies;
