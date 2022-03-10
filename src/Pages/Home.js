import React, { useEffect, useState, useCallback } from "react";
import { Grid, Box, Container } from "@mui/material";
import Podcast from "../Components/PodcastCard";
import Header from "../Components/Header";
import { getAllPodcasts } from "../Logic/api";

function Home() {
  const [loading, setLoading] = useState(true);
  const [podcasts, setPodcasts] = useState([]);

  const apiCallPodcasts = useCallback(async (apiCall) => {
    const podcasts = await getAllPodcasts();

    setPodcasts(podcasts);
  }, []);

  useEffect(() => {
    debugger;
    setLoading(true);
    apiCallPodcasts();
  }, []);
  return (
    <Container>
      <Header setPodcasts={setPodcasts} setLoading={setLoading} />
      <Box>
        {loading && podcasts.length < 1 ? (
          <div>Retrieving podcasts...</div>
        ) : (
          <Grid container>
            {podcasts.map((podcast) => {
              return <Podcast podcast={podcast} key={podcast.id} />;
            })}
          </Grid>
        )}
      </Box>
    </Container>
  );
}

export default Home;
