import React, { useState } from "react";

function Clock() {
  setInterval(returnTime, 1000);

  var time = new Date().toLocaleTimeString();
  const [currentTime, setState] = useState(time);

  function returnTime() {
    var newTime = new Date().toLocaleTimeString();
    setState(newTime);
  }

  return (
    <div className="clock">
      <h1>{currentTime}</h1>
    </div>
  );
}

export default Clock;
