import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardMedia,
  IconButton,
  Link,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MediaPlayer from "./MediaPlayer";

function EpisodeCard({ ...props }) {
  const onClick = (e) => {
    e.preventDefault();
  };
  return (
    <Card>
      <CardHeader title={props.episode.title} />
      <CardMedia
        src={props.episode.thumbnail}
        alt="podcast title"
        component="img"
      />
      <CardContent>
        <Typography>{props.episode.description}</Typography>
        <Link href={props.episode.website} alt="Load elements for this podcast">
          View on the web!
        </Link>
        <IconButton aria-label="favorite" onClick={onClick}>
          <FavoriteBorderIcon />
        </IconButton>
        <CardMedia src={props.episode.audio} component={MediaPlayer} />
      </CardContent>
    </Card>
  );
}

export default EpisodeCard;
