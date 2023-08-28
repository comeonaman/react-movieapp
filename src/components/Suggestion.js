import React, { useState, useEffect } from "react";
import { TextField, Paper, MenuItem, Grid, Autocomplete } from "@mui/material";
import { useDispatch } from "react-redux";
import { searchMovies } from "../redux/search";
import Downshift from "downshift";
import { Link } from "react-router-dom";
import { IMAGES_PATH, COVER_PLACEHOLDER } from "../config";

const Suggestion = (movies) => {
  const dispatch = useDispatch();

  const inputOnChange = (event) => {
    if (!event.target.value) {
      return;
    }

    dispatch(searchMovies(event.target.value));
  };

  //   const [movieList, setMovieList] = useState([]);

  //   useEffect(() => {
  //     setMovieList(movies.movies.results);
  //   }, [movies]);

  return (
    // <Autocomplete
    //   filterOptions={(x) => x}
    //   disablePortal
    //   id="combo-box-demo"
    //   options={movieList}
    //   getOptionLabel={(option) => option.title}
    //   sx={{ width: 300 }}
    //   renderInput={(params) => (
    //     <TextField {...params} label="Movie" onChange={inputOnChange} />
    //   )}
    // />
    <Downshift>
      {({
        getInputProps,
        getItemProps,
        getMenuProps,
        isOpen,
        inputValue,
        highlightedIndex,
        selectedItem,
      }) => (
        <div>
          <TextField
            id="search"
            placeholder="Search"
            fullWidth={true}
            sx={{ mb: 5 }}
            variant="standard"
            InputProps={{
              ...getInputProps({
                onChange: inputOnChange,
              }),
            }}
          />
          {isOpen ? (
            <Paper square={true} {...getMenuProps()}>
              {movies.movies.results
                .slice(0, 10)
                // .filter(
                //   (item) =>
                //     !inputValue ||
                //     item.title.tolowerCase().includes(inputValue.toLowerCase())
                // )
                .map((item, index) => (
                  <MenuItem
                    {...getItemProps({
                      item,
                      key: item.id,
                      selected: highlightedIndex === index,
                      style: {
                        fontWeight: selectedItem === item ? 500 : 400,
                      },
                    })}
                  >
                    <Link to={`/movie/${item.id}`}>
                      <Grid container={true} spacing={8}>
                        <Grid item={true}>
                          {item.poster_path ? (
                            <img
                              src={`${IMAGES_PATH}/w92${item.poster_path}`}
                              alt={item.title}
                            />
                          ) : (
                            <img src={COVER_PLACEHOLDER} alt={item.title} />
                          )}
                        </Grid>
                        <Grid item={true}></Grid>
                      </Grid>
                    </Link>
                  </MenuItem>
                ))}
            </Paper>
          ) : null}
        </div>
      )}
    </Downshift>
  );
};

export default Suggestion;
