import { BrowserRouter, Routes, Route } from "react-router-dom";
import TrendingMovies from "./containers/TrendingMovies";
import MovieDetails from "./containers/MovieDetails";
import Layout from "./components/Layout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGenres } from "./redux/genres";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<TrendingMovies />}></Route>
          <Route path="/" element={<MovieDetails />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
