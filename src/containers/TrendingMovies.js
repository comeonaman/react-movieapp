import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPopularMovies, resetState } from "../redux/movies";
import Loader from "../components/Loader";
import Movies from "../components/Movies";

const TrendingMovies = () => {
  const dispatch = useDispatch();

  const { movies } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getPopularMovies());

    return () => {
      dispatch(resetState());
    };
  }, [dispatch]);

  return movies.page === 0 && movies.isFetching ? (
    <Loader />
  ) : (
    <Movies movies={movies} />
  );
};

export default TrendingMovies;
