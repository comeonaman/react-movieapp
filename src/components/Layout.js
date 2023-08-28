import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import Header from "./Header";
import { styled } from "@mui/material";
import SearchBarMovies from "../containers/SearchBarMovies";


const neutralTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

const LayoutWrapper = styled('div')({
    margin: '50',
    width: 'auto',
});

const Layout = ({children}) => {
    return(
        <ThemeProvider theme={neutralTheme}>
            <CssBaseline />
            <LayoutWrapper>
                <Link to='/'>
                    <Header />
                </Link>
                <SearchBarMovies />
            </LayoutWrapper>
            {children}
        </ThemeProvider>
    );
}

export default Layout;
