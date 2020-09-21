import React from "react";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  headerText: {
    display: "flex",
    flexGrow: 1,
    // paddingTop: 30,
    // marginTop: 30,
  },
  pokehp: {
    padding: 10,
    display: "flex",
    justifyContent: "center",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <Appbar position="static">
      <Toolbar>
        <Typography className={classes.headerText}>
          ドラクエウォーク心検索
        </Typography>
        <Typography>〇</Typography>
      </Toolbar>
    </Appbar>
  );
};

export default Header;
