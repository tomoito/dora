import React from "react";
import "./PopupMenuKokoro.scss";
import { useSelector, useDispatch } from "react-redux";
import { skillSelectedSum_detail } from "../DraqueWalkSlice";
import Button from "@material-ui/core/Button";

const PopupMenuKokoro = () => {
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

    distPath(skillSelectedSum_detail(lst));
    setIsShown(false);
    removeDocumentClickHandler();
  };

  return (
    <div className="popup-menu-container">
      <Button>aa</Button>
      <Button
        variant="contained"
        color="primary"
        onClick={handleToggleButtonClick}
      >
        Toggle Menu
      </Button>
      <div className={`popup-menu ${isShown ? "shown" : ""}`} ref={popupRef}>
        {" "}
        <div>menu</div>
        <p>Show!!!</p>
      </div>
    </div>
  );
};

export default PopupMenuKokoro;
