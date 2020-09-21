import React from "react";
import { Grid, Box, makeStyles, Container } from "@material-ui/core";
import Heder from "../Heder/Heder";
import Cards from "../Cards/Cards";

const useStyles = makeStyles({
  top: {
    marginTop: 5,
    justifyContent: "left",
  },
  waku: {
    height: "90%",
    width: "100%",
    border: 1,
    backgroundColor: "black",
    minHeight: 200,
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <Heder />
      <Container className={classes.top}>
        <Grid container spacing={3} className={classes.top}>
          <Grid item container xs={6} sm={6}>
            <Grid item xs={6} sm={2}>
              <Cards />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Cards />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Cards />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Cards />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Cards />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Cards />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Cards />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Cards />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Cards />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Cards />
            </Grid>
            <Grid item xs={6} sm={2}>
              <Cards />
            </Grid>
          </Grid>
          <Grid item container xs={6} sm={6} padding={4}>
            <Grid item xs={12} sm={12} padding={4}>
              <div className={classes.waku}>eefef</div>
            </Grid>
            <Grid item xs={12} sm={12}>
              <div className={classes.waku}>aeifjaiowejfaioewjfaiowejfioe</div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
