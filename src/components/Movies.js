import React from "react";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";

const Movies = ({movies}) => {

    return (
        <ImageList cols={5} rowHeight={365} gap={12}>
            {
                movies.results.map((movie) => (<p>{movie.title}</p>))
            }
        </ImageList>
    )
}

export default Movies;