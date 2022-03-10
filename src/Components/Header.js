import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Card, Typography, AppBar, Box } from "@mui/material";
import SearchBar from "./Search";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";

function Header({ ...props }) {
  console.log("props = header", props);

  return (
    <AppBar>
      <Box className="card-header">
        <Typography>
          <Link to="/podcasts">podcasts</Link>
        </Typography>
        <Typography>account</Typography>
        <SearchBar
          className="search "
          setLoading={props.setLoading}
          setPodcasts={props.setPodcasts}
          loading={props.loading}
          setParentLoading={props.setParentLoading}
        />
      </Box>
    </AppBar>
  );
}

export default Header;
