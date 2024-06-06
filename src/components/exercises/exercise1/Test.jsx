import React, { useRef, useState } from "react";
import "./Test.css";

const Test = () => {
  const [state, setState] = useState(0);
  let colorref = useRef();
  // let color = document.getElementById("colorChange");

  let changeColor = () => {
    if (state > 0 && state < 6) {
      colorref.current.style.backgroundColor = "blue";
    } else if (state >= 6 && state < 11) {
      colorref.current.style.backgroundColor = "green";
    } else if (state >= 11 && state <= 15) {
      colorref.current.style.backgroundColor = "purple";
    }
    setState(state + 1);
  };

  return (
    <div>
      <main>
        <div className="countcontainer">
          <h1>{state}</h1>
          <button className="ChangeButton" onClick={changeColor}>
            Change
          </button>
        </div>

        <div className="color">
          <h1>Color</h1>
          <div id="colorChange" className="changeColor" ref={colorref}></div>
        </div>
      </main>
    </div>
  );
};

export default Test;
