import React from "react";
import { PokeSearch } from "../PokeSearch/PokeSearch";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { PokeSearchHp } from "../PokeSearch/PokeSearchHp";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  pokehp: {
    padding: 10,
    display: "flex",
    justifyContent: "center",
  },
});

export function PokeHeader() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.pokehp}>
            <PokeSearch />
            <PokeSearchHp></PokeSearchHp>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
