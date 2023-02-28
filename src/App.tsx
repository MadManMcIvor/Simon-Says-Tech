import * as React from "react";
import MidnightMansionGame from "./components/MidnightMansionGame";

import "./App.css";

export default () => {
  return (
    <div className={"container"}>
      <h1 className={"header"}>Simon Says!</h1>
      <MidnightMansionGame />
    </div>
  );
};
