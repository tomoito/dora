import React, { useState, useRef, useEffect } from "react";
import { Avatar, makeStyles, Card, CardMedia } from "@material-ui/core";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import PopupMenu from "../PopupMenu/PopupMenu";
import "./Kokoro.scss";

const useStyles = makeStyles({
  kokoro: {
    height: 100,
    width: 100,
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
    <div>
      <Avatar
        key={key}
        // size="30"
        alt={item.id}
        src={`/static/images/${item.fileName}`}
        className={classes.kokoro}
        onClick={handleToggleButtonClick}
      ></Avatar>
      <div className="popup-menu-container">
        <div className={`popup-menu ${isShown ? "shown" : ""}`} ref={popupRef}>
          {" "}
          <button onClick={() => handleCloseButtonClick(1)}>閉じる</button>
          <li>名前：{item.name.japanese}</li>
          <li>色：{item.type}</li>
          <li>{item.base.HP}</li>
          <li>{item.base.MP}</li>
          <li>{item.base.ちから}</li>
        </div>
      </div>
      <div>{item.base.HP}</div>
      <div>{item.name.japanese}</div>
      <PopupMenu item={item} />
      {/* {item.base.map((i) => (
        <p>i</p>
      ))} */}
    </div>
  );
};

export default Kokoro;
