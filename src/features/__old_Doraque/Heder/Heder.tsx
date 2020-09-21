import React from "react";
import { AppBar, Toolbar, Typography, InputBase } from "@material-ui/core";
const Heder = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>This is Heder</Typography>
        <InputBase></InputBase>
      </Toolbar>
    </AppBar>
  );
};

export default Heder;
