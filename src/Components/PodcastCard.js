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

function PodcastCard({ podcast }) {
  return (
    <Card>
      <CardHeader title={podcast.title} />
      <CardMedia
        className="thumbnail"
        component="img"
        src={podcast.thumbnail}
        alt="podcast title"
      />
      <CardContent>
        <Typography className="podcast-card">{podcast.description}</Typography>
        {/* <Link href="*" alt="Load elements for this podcast">
          View Episodes
        </Link> */}
        <IconButton
          aria-label="favorite"
          onClick={() => console.log("onClick will go here ")}
        >
          <FavoriteBorderIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default PodcastCard;
