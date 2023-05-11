import { AppBar } from '@mui/material';
import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar
      enableColorOnDark={true}
    >
      Hi user!
      <Link to="/">Dashboard</Link>
      <Link to="create">Create </Link>
    </AppBar>
  );
};

export default Header;
