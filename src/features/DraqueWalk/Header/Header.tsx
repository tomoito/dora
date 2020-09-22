import React from "react";
import {
  AppBar,
  Toolbar,
  MenuItem,
  StepIcon,
  Typography,
  TextField,
  InputBase,
  makeStyles,
  Paper,
} from "@material-ui/core";

import { useDispatch } from "react-redux";
import { searchVal, doraSearch } from "../DraqueWalkSlice";
import { useSelector } from "react-redux";
import Sample from "../Sample/Sample";

const useStyles = makeStyles({
  root: {
    marginBottom: 5,
  },
  title: {
    padding: 5,
  },
  input: {
    marginTop: 5,
    marginBottom: 5,
    // height: 30%,
    padding: 2,
    alignItems: "center",
    display: "flex",
  },
  input_title: {
    // alignItems: "center",
    // justifyItems: "center",
    padding: 10,
  },
});

const Header = () => {
  const classes = useStyles();
  const distPath = useDispatch();
  const val = useSelector(searchVal);

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            ドラクエウォークのこころ検索
          </Typography>
          {/* <TextField className={classes.title} /> */}
          <Paper className={classes.input}>
            <InputBase
              className={classes.input}
              placeholder="Search…"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                distPath(searchVal(e.target.value));
                distPath(doraSearch(e.target.value));
              }}
            />
          </Paper>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
