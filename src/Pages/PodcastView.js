import React, { useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { Container, Grid, Box } from "@mui/material";
import EpisodeCard from "../Components/EpisodeCard";
import Header from "../Components/Header";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const PodcastView = ({ ...props }) => {
  console.log("props-pview", props);
  debugger;
  const location = useLocation();
  const podcast = location.data.podcast;
  const [loading, setLoading] = useState(true);
  const [episodes, setEpisodes] = useState([]);

  const grabEpisodes = (podcast) => {
    console.log("props.podcast", props.podcast);
    setLoading(true);
    const episodes = podcast.episodes;
    setEpisodes(episodes);
    setLoading(false);
  };
  useEffect(() => {
    grabEpisodes(podcast);
  }, []);
  return (
    <Container>
      <Header setLoading={setLoading} loading={loading} {...props} />
      <Box>
        {!loading && episodes ? (
          <Grid container {...props}>
            {episodes.podcasts.map((episode) => {
              return (
                <EpisodeCard
                  {...props}
                  episdoe={episode}
                  key={episode.id}
                  loading={loading}
                  // state={{ loading: true }}
                  setLoading={setLoading}
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
};
export default PodcastView;
