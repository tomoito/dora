import React from "react";
import { Paper, Typography, Grid, makeStyles, Avatar } from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import {
  searchVal,
  doraSearch,
  DoraFil,
  filterType,
  DoraSearchSkill,
  searchSkill,
  skillSum,
} from "../DraqueWalkSlice";
import { useDispatch, useSelector } from "react-redux";

const useSytles = makeStyles({
  serach: {
    display: "flex",
    justify: "flex-start",
  },
  serachField: {
    display: "flex",
    justify: "flex-start",
  },
  toggleGroup: {
    background: "#fff",
    spacing: "10px",
  },
  toggleButton: {
    padding: 3,
    margin: 3,
    backgroundColor: "#99CC66",
  },

  toggleContainer: {
    textAlign: "center",
    zoom: 1.2,
    padding: 2,
  },
  toggleContainer2: {
    textAlign: "center",
    zoom: 1.2,
    padding: 2,
  },
  filterType: {
    backgroundColor: "white",
    zoom: 1.2,
    padding: 10,
    margin: 3,
  },
  toggleContainer3: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  paper: {
    marginTop: 10,
  },
});

const SearchField = () => {
  const classes = useSytles();
  const filerItem_color = ["赤", "青", "黄", "緑"];
  const filerItem_img = [
    "red_si.png",
    "purple_si.png",
    "yellow_si.png",
    "green_si.png",
  ];

  const test = ["赤", "緑"];

  const filerItem_main = [
    "スキルの斬撃・体技ダメージ",
    "魔力アップ",
    "スキルのHP回復効果",
  ];

  const filerItem_main_path = ["1.png", "2.png", "3.png"];

  const filerItem_taisei = [
    "メラ耐性",
    "ギラ耐性",
    "ドルマ耐性",
    "ジバリア耐性",
    "ディン耐性",
    "イオ耐性",
    "ヒャド耐性",
  ];

  const filerItem_taisei_path = [
    "7.png",
    "11.png",
    "22.png",
    "33.png",
    "44.png",
    "7.png",
    "7.png",
  ];

  const filerItem_kouka = [
    "メラ属性アップ",
    "ギラ属性アップ",
    "ドルマ属性アップ",
    "ジバリア属性アップ",
    "ディン属性アップ",
    "イオ属性アップ",
    "ヒャド属性アップ",
  ];

  const distPath = useDispatch();
  const val = useSelector(DoraFil);

  const filter_kouka = useSelector(DoraSearchSkill);

  const handleClick = (e: React.MouseEvent<HTMLElement>, t: any) => {
    // alert(t);
    const x = t.map((i: any) => {
      //   console.log(i);
      const x = [];
      x.push(i);
      return i;
    });
    distPath(filterType(x));
    distPath(doraSearch("hoge"));
    // setSelectValue(pokeFilter);
  };

  const handleClick_option = (e: React.MouseEvent<HTMLElement>, t: any) => {
    // alert(t);
    const x = t.map((i: any) => {
      //   console.log(i);
      const x = [];
      x.push(i);
      return i;
    });

    distPath(searchSkill(x));
    distPath(doraSearch("hoge"));
    // setSelectValue(pokeFilter);
  };

  return (
    <div>
      <Grid container spacing={1}>
        <Paper className={classes.serach}>
          <ToggleButtonGroup
            value={val}
            className={classes.toggleGroup}
            onChange={handleClick}
          >
            {filerItem_color.map((i, y) => (
              <ToggleButton value={i} className={classes.filterType}>
                {/* <Typography>{i}</Typography> */}
                <Avatar
                  key={i}
                  // size="30"
                  alt={i}
                  src={`/static/filter_color/${filerItem_img[y]}`}
                ></Avatar>
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Paper>
      </Grid>
      <Grid container spacing={1} direction="column" alignItems="flex-start">
        {/* <Paper className={classes.serach}> */}
        <Grid item xs={8}>
          <ToggleButtonGroup
            value={filter_kouka}
            className={classes.toggleGroup}
            onChange={handleClick_option}
            exclusive={false}
          >
            {filerItem_main.map((i, y) => (
              <ToggleButton value={i} className={classes.toggleButton}>
                <Avatar
                  key={i}
                  alt={i}
                  className={classes.toggleContainer}
                  src={`/static/filter_zokusei/${filerItem_main_path[y]}`}
                />
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Grid>

        <Grid item xs={8}>
          <ToggleButtonGroup
            value={filter_kouka}
            className={classes.toggleGroup}
            onChange={handleClick_option}
            exclusive={false}
          >
            {filerItem_taisei.map((i, y) => (
              <ToggleButton value={i} className={classes.toggleButton}>
                <Avatar
                  key={i}
                  alt={i}
                  className={classes.toggleContainer2}
                  src={`/static/filter_zokusei/${filerItem_taisei_path[y]}`}
                />
              </ToggleButton>
            ))}

            {/* {filerItem_kouka.map((i) => (
              <ToggleButton value={i}>
                <Avatar
                  key={i}
                  alt={i}
                  src={`/static/filter_zokusei/${filerItem_taisei_path[y]}`}
                />{" "}
              </ToggleButton>
            ))} */}
          </ToggleButtonGroup>
        </Grid>
        {/* 
        {filerItem_taisei.map((i) => (
          <ToggleButton value={i}>
            <Typography>{i}</Typography>
          </ToggleButton>
        ))} */}

        {/* </Paper> */}
      </Grid>
    </div>
  );
};

export default SearchField;
