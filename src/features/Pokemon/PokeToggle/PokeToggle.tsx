import React, { useState } from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { ToggleButtonGroupProps } from "@material-ui/lab";
import Paper from "@material-ui/core/Paper";
import { makeStyles, Grid } from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { filterType, pokeSearch } from "../PokemonSlice";
import { PokeFil, PokeSearchVal, SearchFilter } from "../PokemonSlice";

const useStyles = makeStyles({
  toggleContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  paper: {
    marginTop: 10,
  },
  toggleGroup: {
    background: "#fff",
  },
  toggleButton: {
    fontSize: 12,
    width: 90,
  },
});
const PokeToggle = () => {
  const classes = useStyles();
  const [selectValue, setSelectValue] = useState([]);
  const distPatch = useDispatch();
  const pokeFilter = useSelector(PokeFil);

  const pokeVal = useSelector(PokeSearchVal);
  const pokeValFilter = useSelector(SearchFilter);

  const handleClick = (e: any, t: any) => {
    const x = t.map((i: any) => {
      //   console.log(i);
      const x = [];
      x.push(i);
      return i;
    });
    distPatch(filterType(x));
    distPatch(pokeSearch(pokeValFilter.val));
    // setSelectValue(pokeFilter);
    // filterType.push(t);
    console.log(x);
    // if (filterType.includes(event.target.value)) {
    //     filterType.
    //   return;
    // }

    // if (this.props.filterType.length < 2) {
    //   filterType.push(inputType);
    // }
  };

  return (
    <div className={classes.toggleContainer}>
      <Grid container>
        <Paper className={classes.paper} elevation={3}>
          <ToggleButtonGroup
            className={classes.toggleGroup}
            value={pokeFilter}
            exclusive={false}
            onChange={handleClick}
          >
            <ToggleButton className={classes.toggleButton} value="Normal">
              Normal
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Fire">
              Fire
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Water">
              Water
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Electric">
              Electric
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Grass">
              Grass
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Ice">
              Ice
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Fighting">
              Fighting
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Poison">
              Poison
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Ground">
              Ground
            </ToggleButton>
            <br />
            <ToggleButton className={classes.toggleButton} value="Flying">
              Flying
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Psychic">
              Psychic
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Bug">
              Bug
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Rock">
              Rock
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Ghost">
              Ghost
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Dragon">
              Dragon
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Dark">
              Dark
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Steel">
              Steel
            </ToggleButton>
            <ToggleButton className={classes.toggleButton} value="Fairy">
              Fairy
            </ToggleButton>
          </ToggleButtonGroup>
        </Paper>
      </Grid>
    </div>
  );
};

export default PokeToggle;
