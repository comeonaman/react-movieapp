import React from "react";
import Search from "../components/Suggestion";
import { useSelector } from "react-redux";

const SearchBarMovies = () => {
  const { search } = useSelector((store) => store);

  const { genres } = useSelector((store) => store.genres);

  return <Search movies={search} genres={genres} />;
};

export default SearchBarMovies;
