import React, { createContext, useState, useEffect } from "react";

import { ItemType } from "./Types";
export const ApiContext = createContext();

console.log("APiContextProviderを読み込み");

const ApiContextProvider = (props) => {
  const initial = Array.from({ length: 10 }, (v, k) => k).map((k) => {
    return {
      id: `id-${k}`,
      content: `Item ${k}`,
    };
  });
  const [state, setState] = useState(initial);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    // alert(result);
    return result;
  };

  const onDragEnd = (result) => {
    // alert(result.destination);
    // // alert(result.destination.index);
    // alert(result.source.index);
    if (!result.destination) {
      return;
    }

    // alert(result.combine);
    if (result.combine) {
      alert(result.source.index);
    }

    if (result.destination.index === result.source.index) {
      return;
    }
    // // alert(statess);
    // alert(result.source.index);
    // alert(result.destination.index);

    const items = reorder(state, result.source.index, result.destination.index);

    setState(items);
  };

  return (
    <ApiContext.Provider
      value={{
        state,
        setState,
        onDragEnd,
        reorder,
      }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiContextProvider;
