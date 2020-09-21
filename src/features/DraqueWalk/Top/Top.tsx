import React, { useContext } from "react";
import Header from "../Header/Header";
import Content from "../Content/Content";
import { DragDropContext } from "react-beautiful-dnd";
import { ApiContext } from "../Provider/ApiContext";

const Top = () => {
  const { onDragEnd, state } = useContext(ApiContext);

  console.log("Topを読み込みました。");
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
};

export default Top;
