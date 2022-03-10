import React, { useEffect, useState, useCallback } from "react";
import { Grid, Box, Container } from "@mui/material";
import Podcast from "../Components/PodcastCard";
import Header from "../Components/Header";
import { getAllPodcasts } from "../Logic/api";
import { withRouter } from "../App";

function Home(props) {
  debugger;
  console.log("props-home", props);
  const [loading, setLoading] = useState(true);
  const [podcasts, setPodcasts] = useState([]);
  console.log("loading", loading);
  console.log("podcasts", podcasts);

  const apiCallPodcasts = useCallback(async () => {
    const podcasts = await getAllPodcasts();

    setPodcasts(podcasts);
    console.log("podcasts loaded", podcasts);
    setLoading(false);
  }, []);

  const wrapperSetParentState = useCallback(
    (val) => {
      setLoading(val);
    },
    [setLoading],
  );

  useEffect(() => {
    setLoading(true);
    apiCallPodcasts();
  }, [apiCallPodcasts]);
  return (
    <Container>
      <Header
        setPodcasts={setPodcasts}
        setLoading={setLoading}
        loading={loading}
        setParentLoading={wrapperSetParentState}
        {...props}
      />
      <Box>
        {!loading && podcasts ? (
          <Grid container {...props}>
            {podcasts.map((podcast) => {
              return (
                <Podcast
                  {...props}
                  podcast={podcast}
                  key={podcast.id}
                  loading={loading}
                  // state={{ loading: true }}
                  setLoading={setLoading}
                  setPodcasts={setPodcasts}
                  setParentLoading={wrapperSetParentState}
                  {...props}
                />
              );
            })}
          </Grid>
        ) : (
          <div>Retrieving podcasts...</div>
        )}
      </Box>
    </Container>
  );
}

export default Home;
