import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

import { useDispatch } from "react-redux";
import { pokeSearch, searchHp } from "../PokemonSlice";
import { useSelector } from "react-redux";
const useStyles = makeStyles({
  paper: {
    marginTop: 10,
    padding: "1px 4px",
    display: "flex",
    alignItems: "center",
    width: 300,
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 5,
  },
});

export function PokeSearchHp() {
  const classes = useStyles();
  const distPath = useDispatch();
  // const val = useSelector(searchVal);

  return (
    <Paper className={classes.paper} elevation={3}>
      <InputBase
        className={classes.input}
        placeholder="Search…"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          distPath(searchHp(Number(e.target.value)));
          distPath(pokeSearch(e.target.value));
        }}
      />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
