import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import classes from "*.module.css";

const useStyles = makeStyles({
  card: {
    width: 300,
    height: 250,
    textAlign: "center",
    marginRight: 10,
  },
  media: {
    height: 100,
  },
});

export function PokeCards(props: any) {
  const classes = useStyles();
  const { pokemon, language, id, type, hp } = props;

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} title="pokemon" />
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>
          No.{id}
        </Typography>
        <Typography gutterBottom variant="h6">
          {pokemon}
        </Typography>
        <Typography gutterBottom variant="subtitle1">
          {type} /hp:{hp}
        </Typography>
      </CardContent>
    </Card>
  );
}
