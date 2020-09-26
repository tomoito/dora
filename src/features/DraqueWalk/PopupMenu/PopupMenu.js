// PopupMenu.js
import React, { useState, useRef, useEffect } from "react";
import "./PopupMenu.scss";
import { useSelector, useDispatch } from "react-redux";
import { skillSelectedSum_detail } from "../DraqueWalkSlice";
import Button from "@material-ui/core/Button";

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

  // const documentClickHandler = (e) => {
  //   if (popupRef.current.contains(e.target)) return;

  //   setIsShown(false);
  //   document.body.removeEventListener("click", documentClickHandler);
  // };

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
        <div>menu</div>
        <button onClick={() => handleCloseButtonClick(1)}>虹</button>
        <button onClick={() => handleCloseButtonClick(2)}>赤</button>
        <button onClick={() => handleCloseButtonClick(3)}>青</button>
        <button onClick={() => handleCloseButtonClick(4)}>黄</button>
      </div>
    </div>
  );
};

export default PopupMenu;
