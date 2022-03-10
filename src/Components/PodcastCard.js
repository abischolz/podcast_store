import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
  CardActions,
  IconButton,
  Box,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const PodcastCard = ({ ...props }) => {
  debugger;
  console.log("props-pcard", props);
  useEffect(() => {
    if (props.podcast) {
      props.setLoading(false);
    }
  }, []);

  return (
    <Card className="grid-card">
      {!props.podcast ? (
        <div>Loading....</div>
      ) : (
        <Box>
          <CardHeader title={props.podcast.title} />
          <CardMedia
            className="thumbnail"
            component="img"
            src={props.podcast.thumbnail}
            alt="podcast title"
          />
          <CardContent>
            <Typography className="podcast-card">
              {props.podcast.description}
            </Typography>
            <Link
              to={`/podcast/${props.podcast.id}`}
              data={{
                podcast: props.podcast,
                loading: props.loading,
              }}
            >
              View Episodes
            </Link>
            <CardActions>
              <Box>
                <IconButton
                  aria-label="favorite"
                  onClick={() => console.log("onClick will go here ")}
                >
                  <FavoriteBorderIcon />
                </IconButton>
              </Box>
              <Box>
                <IconButton
                  aria-label="delete"
                  onClick={() => console.log("onClick will go here ")}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            </CardActions>
          </CardContent>
        </Box>
      )}
    </Card>
  );
};
export default PodcastCard;
