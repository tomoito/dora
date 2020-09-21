import React, { useState, useContext } from "react";
import "./App.css";
import { PokeTop } from "./features/Pokemon/PokeTop/PokeTop";
import { Card, Grid } from "@material-ui/core";
import { PokeSearch } from "./features/Pokemon/PokeSearch/PokeSearch";
import { PokeCards } from "./features/Pokemon/PokeCards/PokeCards";
import Top from "./features/DraqueWalk/Top/Top";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { ItemType } from "./features/DraqueWalk/Provider/Types";
import ApiContextProvider, {
  ApiContext,
} from "./features/DraqueWalk/Provider/ApiContext";

function App() {
  // const kokoroList = useContext(ApiContext);
  // const [state, setState] = useState({ items: kokoroList });
  // const { onDragEnd, state } = useContext(ApiContext);

  console.log("Appを読み込み");
  return (
    <ApiContextProvider>
      <div className="App">
        <Top />
      </div>
    </ApiContextProvider>
  );
}

export default App;
