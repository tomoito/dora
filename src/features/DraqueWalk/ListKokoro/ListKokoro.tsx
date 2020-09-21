import React, { useContext } from "react";
import Kokoro from "../Kokoro/Kokoro";
import { Grid } from "@material-ui/core";
import { ApiContext } from "../Provider/ApiContext";

const ListKokoro = () => {
  const { state } = useContext(ApiContext);

  const initial = Array.from({ length: 10 }, (v, k) => k).map((k) => {
    return {
      id: `id-${k}`,
      content: `Item ${k}`,
    };
  });

  return (
    <div>
      {state.map((x: any, y: any) => (
        <Grid item>
          <Kokoro item={x} index={y} key={x.id} />
        </Grid>
      ))}
    </div>
  );
};

export default ListKokoro;
