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

function EpisodeCard() {
  return (
    <Card>
      <CardHeader title="PODCAST TITLE " />
      <CardMedia img="image.url" alt="podcast title" />
      <CardContent>
        <Typography>Description of podcast</Typography>
        <Link href="*" alt="Load elements for this podcast">
          View Episodes
        </Link>
        <IconButton
          aria-label="favorite"
          onClick={() => console.log("onClick will go here ")}
        >
          <FavoriteBorderIcon />
        </IconButton>
        <CardMedia src="episode.auido" component={MediaPlayer} />
      </CardContent>
    </Card>
  );
}

export default EpisodeCard;
