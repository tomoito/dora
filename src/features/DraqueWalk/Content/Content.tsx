import React, { useState, useContext, useRef } from "react";
import Kokoro from "../Kokoro/Kokoro";
import { Grid, makeStyles, Box, Avatar, Typography } from "@material-ui/core";
import SelectKokoro from "../SelectKokoro/SelectKokoro";
import SearchField from "../SearchField/SearchField";
import Charts_rader from "../Charts/Charts_rader";
import { Droppable } from "react-beautiful-dnd";
import { ApiContext } from "../Provider/ApiContext";
import ListKokoro from "../ListKokoro/ListKokoro";
import { useSelector, useDispatch } from "react-redux";
import {
  distDora,
  skillSelectedSum,
  skillSum,
  skillSelectedSum_detail,
  skillSum_Detail,
} from "../DraqueWalkSlice";

import Draque_one from "../../Draque one.json";
type Dora = typeof Draque_one;

const useStyles = makeStyles({
  chart: {
    width: 200,
    height: 200,
  },
  CardSection: {
    // display: "flex",
    // padding: "grid",
    // overflow: "auto",
    // flexWrap: "wrap",
    // width: "auto",
  },
  kokoro: {
    height: 100,
    width: 100,
  },
  mgn: {
    marginLeft: 10,
  },
});

// type skillCollect = (
//   {"name":string,"value":number},
//   {"name":string,"value":number},
// )
const columnId = 1;

const Content = () => {
  const classes = useStyles();
  const { state } = useContext(ApiContext);

  const dispDora = useSelector(distDora);
  const distPath = useDispatch();
  const skillDora = useSelector(skillSum);
  const kokoroDetail = useSelector(skillSum_Detail);

  const [selectKokoro, setSelectkokoro] = useState(Draque_one);

  const addKokoro = (x: Dora) => {
    // distPath(skillSelectedSum_detail(x.id));
  };

  const onClickKokoro = (x: Dora) => {
    alert(x.name.english);
  };

  return (
    <div>
      <Grid container spacing={2} className={classes.mgn}>
        <Grid item container xs={12} lg={7}>
          <Grid item container direction="column" spacing={4}>
            <Grid item container>
              <SearchField />
            </Grid>
            <Box>
              <Grid item container>
                {dispDora.map((x, y: any) => (
                  <Grid item xs={4} lg={2}>
                    <Kokoro
                      item={x}
                      index={y}
                      key={x.id}
                      onClick={() => onClickKokoro(x)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
        <Grid item container xs={12} lg={5}>
          <Grid item xs={12}>
            {/* <Box className={classes.chart}> */}
            {/* </p> */}
            <SelectKokoro />
            {/* </Box> */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Content;
