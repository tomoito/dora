// PopupMenu.js
import React, { useState, useRef, useEffect } from "react";
import "./PopupMenu.scss";
import { useSelector, useDispatch } from "react-redux";
import { skillSelectedSum_detail } from "../DraqueWalkSlice";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Typography } from "@material-ui/core";
import Modal from "react-modal";

const useStyles = makeStyles({
  chart: {
    width: 200,
    height: 200,
  },
  btn: {
    alignContent: "center",
    alignItems: "center",
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
    setIsOpen(false);

    // distPath(skillSelectedSum_detail(item.id));
    distPath(skillSelectedSum_detail(lst));
    setIsShown(false);
    removeDocumentClickHandler();
    // document.addEventListener("click", documentClickHandler.current);
  };

  const classes = useStyles();

  //modal start

  const modalStyle = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,0.85)",
    },
    content: {
      position: "absolute",
      top: "2rem",
      left: "2rem",
      right: "2rem",
      bottom: "5rem",
      backgroundColor: "paleturquoise",
      borderRadius: "1rem",
      padding: "1.5rem",
    },
  };

  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#3ab60b";
  }

  function closeModal() {
    setIsOpen(false);
  }

  //modal end

  return (
    <div className="popup-menu-container">
      {/* <Button
        color="secondary"
        variant="outlined"
        onClick={openModal}
        // onClick={handleToggleButtonClick}
      > */}
      <Button variant="outlined" onClick={() => setIsOpen(true)}>
        Open
      </Button>

      {/* </Button> */}
      <Modal
        isOpen={modalIsOpen}
        // style={modalStyle}
        onRequestClose={() => setIsOpen(false)}
        overlayClassName={{
          base: "overlay-base",
          afterOpen: "overlay-after",
          beforeClose: "overlay-before",
        }}
        className={{
          base: "content-base",
          afterOpen: "content-after",
          beforeClose: "content-before",
        }}
        closeTimeoutMS={500}
      >
        <Grid container>
          <Grid item xs={6} className={classes.btn}>
            <Button
              variant="outlined"
              onClick={() => handleCloseButtonClick(1)}
            >
              虹
            </Button>
          </Grid>
          <Grid item xs={6} className={classes.btn}>
            <Button
              variant="outlined"
              onClick={() => handleCloseButtonClick(2)}
            >
              赤
            </Button>
          </Grid>
          <Grid item xs={6} className={classes.btn}>
            <Button
              variant="outlined"
              onClick={() => handleCloseButtonClick(3)}
            >
              青
            </Button>
          </Grid>
          <Grid item xs={6} className={classes.btn}>
            <Button
              variant="outlined"
              onClick={() => handleCloseButtonClick(4)}
            >
              黄
            </Button>
          </Grid>
        </Grid>
      </Modal>
      <div className={`popup-menu ${isShown ? "shown" : ""}`} ref={popupRef}>
        {" "}
      </div>
    </div>
  );
};

export default PopupMenu;
