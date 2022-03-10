import React from "react";
import { Link } from "react-router-dom";
import { Card, Typography, AppBar } from "@mui/material";
import SearchBar from "./Search";

function Header({ setLoading, setPodcasts }) {
  return (
    <AppBar className="card-header">
      <Typography>
        <Link to="/podcasts">podcasts</Link>
      </Typography>
      <Typography>account</Typography>
      <SearchBar setLoading={setLoading} setPodcasts={setPodcasts} />
    </AppBar>
  );
}

export default Header;
