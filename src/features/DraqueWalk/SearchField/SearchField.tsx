import React from "react";
import { Paper, Typography, Grid, makeStyles } from "@material-ui/core";
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
});

const SearchField = () => {
  const classes = useSytles();
  const filerItem_color = ["赤", "青", "黄", "緑"];
  const test = ["赤", "緑"];

  const filerItem_main = [
    "スキルの斬撃・体技ダメージ",
    "魔力アップ",
    "スキルのHP回復効果",
  ];

  const filerItem_taisei = [
    "メラ耐性",
    "ギラ耐性",
    "ドルマ耐性",
    "ジバリア耐性",
    "ディン耐性",
    "イオ耐性",
    "ヒャド耐性",
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
            {filerItem_color.map((i) => (
              <ToggleButton value={i}>
                <Typography>{i}</Typography>
              </ToggleButton>
            ))}
            <ToggleButton value="aiueo">
              <Typography>aiueo</Typography>
            </ToggleButton>
            {/* <Grid container spacing={1}>
            {filerItem_taisei.map((i) => (
              <Grid item>
                <ToggleButton value={i}>
                  <Typography>{i}</Typography>
                </ToggleButton>
              </Grid>
            ))}
          </Grid> */}
          </ToggleButtonGroup>
        </Paper>
      </Grid>

      <Grid container spacing={1}>
        <Paper className={classes.serach}>
          <ToggleButtonGroup
            value={filter_kouka}
            className={classes.toggleGroup}
            onChange={handleClick_option}
            exclusive={false}
          >
            {filerItem_main.map((i) => (
              <ToggleButton value={i}>
                <Typography>{i}</Typography>
              </ToggleButton>
            ))}

            {filerItem_taisei.map((i) => (
              <ToggleButton value={i}>
                <Typography>{i}</Typography>
              </ToggleButton>
            ))}

            {filerItem_kouka.map((i) => (
              <ToggleButton value={i}>
                <Typography>{i}</Typography>
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Paper>
      </Grid>
    </div>
  );
};

export default SearchField;
