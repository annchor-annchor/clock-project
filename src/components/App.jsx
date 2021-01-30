import React from "react";
import Fade from "react-reveal/Fade";
import ReactDom from "react-dom";
import Clock from "./Clock";

function App() {
  function handleClick() {
    console.log("click");
    ReactDom.render(<Clock />, document.getElementById("screen"));
  }

  return (
    <div id="screen">
      <Fade top>
        <button onClick={handleClick}>Get Time</button>
      </Fade>
    </div>
  );
}
export default App;
