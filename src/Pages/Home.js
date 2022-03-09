import React, { useEffect, useState } from "react";
import { Grid, Box, Container } from "@mui/material";
import Podcast from "../Components/PodcastCard";
import Header from "../Components/Header";

function Home() {
  useEffect(() => {
    console.log("HOME");
  }, []);
  return (
    <Container>
      <Header />
      <Box>
        <Grid container>
          <Podcast />
        </Grid>
      </Box>
    </Container>
  );
}

export default Home;
