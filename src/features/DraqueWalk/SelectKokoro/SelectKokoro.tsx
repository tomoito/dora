import React from "react";
import { Avatar, makeStyles, Grid, Typography } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";

import { Divider } from "@material-ui/core";

import {
  skillSum,
  skillSum_Detail,
  Dora,
  Dora_one,
  statusSum,
} from "../DraqueWalkSlice";
import { useDispatch, useSelector } from "react-redux";
import SelectedType from "../SelectedType/SelectedType";

const useStyels = makeStyles({
  kokoro: {
    height: 100,
    width: 100,
  },
  text: {
    fontSize: 10,
    marginBottom: 5,
  },
});

// const StyledItem = styled.div`
//   width: 200px;
//   border: 1px solid grey;
//   margin-bottom: 8px;
//   background-color: lightblue;
//   padding: 8px;
// `;

const SelectKokoro = (props: any) => {
  const classes = useStyels();
  const skillDora = useSelector(skillSum);

  const kokoroDetail = useSelector(skillSum_Detail);
  const listSkillSum = useSelector(statusSum);

  return (
    <div>
      <p></p>
      <Typography variant="subtitle1" className={classes.text}></Typography>
      <Grid container spacing={3}>
        <SelectedType />

        {kokoroDetail.map((x: any, y: any) => (
          <Grid item xs={6}>
            {/* <Avatar className={classes.kokoro}>
              ???aaaaaa
            </Avatar> */}
            <Avatar
              className={classes.kokoro}
              src={`/static/images/${x.fileName}`}
            >
              {x.name.japanese}{" "}
            </Avatar>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* <Charts_rader /> */}
          {listSkillSum.map((i) => (
            <li>
              {i[0]}:{i[1]}
            </li>
          ))}
        </Grid>
        <Divider />

        <Grid item xs={12}>
          {/* <Charts_rader /> */}
          {skillDora.map((i) => (
            <li>
              {i[0]}:{i[1]}
            </li>
          ))}
        </Grid>
      </Grid>

      {/* <Avatar className={classes.kokoro}>?</Avatar>
      <Avatar className={classes.kokoro}>?</Avatar>
      <Avatar className={classes.kokoro}>?</Avatar>
      <Avatar className={classes.kokoro}>?</Avatar> */}
    </div>
  );
};

export default SelectKokoro;
