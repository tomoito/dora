import React from "react";
import { Avatar, makeStyles, Grid, Typography } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";

import { Divider } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
  table: {
    mindWidth: 600,
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
      <Typography variant="subtitle1" className={classes.text}></Typography>

      {/* yoko */}
      <Grid container>
        {/* <SelectedType /> */}
        <Grid container item spacing={1} xs={12} lg={5}>
          {kokoroDetail.map((x: any, y: any) => (
            <Grid item xs={6} spacing={1}>
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
          <Grid item xs={12}>
            {/* <Charts_rader /> */}
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                {listSkillSum.map((i) => (
                  <TableRow>
                    <TableCell>
                      <Typography>{i[0]}</Typography>
                    </TableCell>
                    <TableCell>{i[1]}</TableCell>
                  </TableRow>
                  // <li>
                  //   {i[0]}:{i[1]}
                  // </li>
                ))}
              </Table>
            </TableContainer>
          </Grid>
        </Grid>

        <Grid container item xs={12} lg={6}>
          <Grid item xs={12}>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                {/* <Charts_rader /> */}
                {skillDora.map((i) => (
                  <TableRow>
                    <TableCell>{i[0]}</TableCell>
                    <TableCell>{i[1]}</TableCell>
                  </TableRow>
                ))}{" "}
              </Table>
            </TableContainer>
          </Grid>
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
