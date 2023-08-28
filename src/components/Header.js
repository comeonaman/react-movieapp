import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="md">
          <Typography variant="h1" align="center">
            React Movie App
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
