import React from "react";
import Header from "../Header/Header";
import Cards from "../Cards/Cards";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  return (
    <div>
      <Header />
      <Grid container>
        <Grid item container>
          <Grid item>
            <Cards />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item>
            <Cards />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
