import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useSytles = makeStyles({
  card: {
    height: 300,
    width: 200,
    margin: 20,
  },
});

const Cards = () => {
  const classes = useSytles();
  return (
    <Card className={classes.card}>
      <CardHeader title="CardHeader">CardHeader</CardHeader>
      <CardContent>
        <CardMedia>CardMedia</CardMedia>
      </CardContent>
      <Typography>Typography</Typography>
    </Card>
  );
};

export default Cards;
