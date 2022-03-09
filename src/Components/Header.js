import React from "react";
import { Link } from "react-router-dom";
import { Card, Typography } from "@mui/material";

function Header() {
  return (
    <Card>
      <Typography>podcasts</Typography>
      <Typography>account</Typography>
    </Card>
  );
}

export default Header;
