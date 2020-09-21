import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
  Box,
  Avatar,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  hd: {
    height: "50%",
    fontSize: 4,
  },
  card: {
    width: "100%",
    height: "100%",
    textAlign: "center",
    marginRight: 10,
  },
  differenceValue: {
    textAlign: "center",
  },
});

const Cards = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        {/* <CardHeader title="Header" className={classes.hd}>
          <Avatar>R</Avatar>
        </CardHeader> */}
        <CardContent>
          <Box mt={2} display="flex" alignItems="center">
            <Typography className={classes.differenceValue} variant="body2">
              12%
            </Typography>
            <Typography color="textSecondary" variant="caption">
              Since last ince last
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cards;
