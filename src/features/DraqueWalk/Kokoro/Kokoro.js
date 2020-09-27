import React, { useState, useRef, useEffect } from "react";
import { Avatar, makeStyles, Card, CardMedia } from "@material-ui/core";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import PopupMenu from "../PopupMenu/PopupMenu";
import "./Kokoro.scss";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  kokoro: {
    height: 100,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
  },
  card: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",

  },
  media: {
    height: 150,
  },
});
const StyledItem = styled.div`
  width: 100px;
  border: 1px solid grey;
  margin-bottom: 8px;
  background-color: lightblue;
  padding: 8px;
`;

const Kokoro = (props) => {
  const { item, index, key, onClick } = props;
  const classes = useStyles();

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
      document.removeEventListener("click", documentClickHandler.current);
    });
  };

  const removeDocumentClickHandler = () => {
    document.removeEventListener("click", documentClickHandler.current);
  };

  const handleCloseButtonClick = (e) => {
    const lst = [item.id, e];
    setIsShown(false);
    removeDocumentClickHandler();
  };

  return (
    <Card className={classes.card} elevation={5}>
      <CardActionArea onClick={handleToggleButtonClick}>
        <CardMedia
          className={classes.media}
          image={`/static/images/${item.fileName}`}
        />
      </CardActionArea>

      {/* <Avatar
            key={key}
            // size="30"
            alt={item.id}
            src={`/static/images/${item.fileName}`}
            className={classes.kokoro}
            onClick={handleToggleButtonClick}
          ></Avatar> */}
      <CardContent>
        <div className="popup-menu-container">
          <div
            className={`popup-menu ${isShown ? "shown" : ""}`}
            ref={popupRef}
          >
            {" "}
            <button onClick={() => handleCloseButtonClick(1)}>閉じる</button>
            <li>名前：{item.name.japanese}</li>
            <li>色：{item.type}</li>
            <li>{item.base.HP}</li>
            <li>{item.base.MP}</li>
            <li>{item.base.ちから}</li>
          </div>
        </div>
        <Typography className={classes.card}>{item.base.HP}</Typography>
        <Typography gutterBottom variant="h6">
          {item.name.japanese}
        </Typography>
        <PopupMenu item={item} />

        {/* {item.base.map((i) => (
        <p>i</p>
      ))} */}
      </CardContent>
    </Card>
  );
};

export default Kokoro;
