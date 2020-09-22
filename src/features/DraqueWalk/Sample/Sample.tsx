import React from "react";

const Sample = () => {
  const lst: string[] = ["ab", "cdsdsd", "ef", "ad", "bf"];
  return (
    <div>
      <p>サンプルファンクション</p>
      {lst.map((x) => (
        <li>{x}</li>
      ))}
      {lst.filter((x) => x.length > 2)}
    </div>
  );
};

export default Sample;
