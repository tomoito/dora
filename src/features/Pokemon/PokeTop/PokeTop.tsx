import React from "react";
import { PokeHeader } from "../PokeHeader/PokeHeader";
import { PokeCards } from "../PokeCards/PokeCards";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Box } from "@material-ui/core";

import { useSelector } from "react-redux";
import { distPoke } from "../PokemonSlice";
import PokeToggle from "../PokeToggle/PokeToggle";

const useStyles = makeStyles({
  gridArea: {
    flexGrow: 1,
    marginTop: 5,
    marginLeft: 15,
    marginRight: 5,
  },
});

export function PokeTop() {
  const classes = useStyles();
  const lst = useSelector(distPoke);

  return (
    <div>
      <PokeHeader />
      {/* <Grid container justify="center">
        <Grid item>
          <PokeHeader />
        </Grid>
      </Grid> */}
      <Grid container justify="center" spacing={1}>
        <Grid item>
          <PokeToggle />
        </Grid>
      </Grid>
      <div className={classes.gridArea}>
        <Grid container spacing={1} justify="center">
          {lst.map((lst) => (
            <Grid item xs={3}>
              <PokeCards
                pokemon={lst.name.japanese}
                id={lst.id}
                type={lst.type}
                hp={lst.base.HP}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
