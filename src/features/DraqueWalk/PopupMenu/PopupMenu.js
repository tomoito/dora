// PopupMenu.js
import React, { useState, useRef, useEffect } from "react";
import "./PopupMenu.scss";
import { useSelector, useDispatch } from "react-redux";
import { skillSelectedSum_detail } from "../DraqueWalkSlice";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  chart: {
    width: 200,
    height: 200,
  },
  btn: {
    margin: 10,
  },
});
const PopupMenu = (props) => {
  const { item } = props;
  const distPath = useDispatch();

  const [isShown, setIsShown] = useState(false);
  const popupRef = useRef();
  const documentClickHandler = useRef();

  useEffect(() => {
    documentClickHandler.current = (e) => {
      // ...
      if (popupRef.current.contains(e.target)) return;
      setIsShown(false);
      removeDocumentClickHandler();
    };
  }, []);

  const handleToggleButtonClick = () => {
    if (isShown) return;

    setIsShown(true);

    document.addEventListener("click", (e) => {
      // setIsShown(false);
      document.removeEventListener("click", documentClickHandler.current);
    });
  };

  const removeDocumentClickHandler = () => {
    document.removeEventListener("click", documentClickHandler.current);
  };

  const handleCloseButtonClick = (e) => {
    const lst = [item.id, e];

    // distPath(skillSelectedSum_detail(item.id));
    distPath(skillSelectedSum_detail(lst));
    setIsShown(false);
    removeDocumentClickHandler();
    // document.addEventListener("click", documentClickHandler.current);
  };

  const classes = useStyles();

  return (
    <div className="popup-menu-container">
      <Button
        color="secondary"
        variant="outlined"
        onClick={handleToggleButtonClick}
      >
        追加
      </Button>
      <div className={`popup-menu ${isShown ? "shown" : ""}`} ref={popupRef}>
        {" "}
        <Typography>選択してね</Typography>{" "}
        <Grid container>
          <Grid item xs={3} className={classes.btn}>
            <Button
              variant="outlined"
              onClick={() => handleCloseButtonClick(1)}
            >
              虹
            </Button>
          </Grid>
          <Grid item xs={3} className={classes.btn}>
            <Button
              variant="outlined"
              onClick={() => handleCloseButtonClick(2)}
            >
              赤
            </Button>
          </Grid>
          <Grid item xs={3} className={classes.btn}>
            <Button
              variant="outlined"
              onClick={() => handleCloseButtonClick(3)}
            >
              青
            </Button>
          </Grid>
          <Grid item xs={3} className={classes.btn}>
            <Button
              variant="outlined"
              onClick={() => handleCloseButtonClick(4)}
            >
              黄
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PopupMenu;
