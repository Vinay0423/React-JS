import React, { useRef, useState } from 'react'

const Test1 = () => {


    const [state, setState] = useState(0);
    const[color,setColor]=useState('red')
     let colorref = useRef();
  // let color = document.getElementById("colorChange");

 let  bgcolor;
  let changeColor = () => {
    console.log(state,'before state');
      setState(state + 1);
      if (state >=0 && state <=4) {
          setColor ("blue");
        } else if (state >= 5 && state <=9) {
            setColor("green");
        } else if (state >= 10 && state <= 16) {
            setColor( "purple");
        }
    };
    console.log(state);


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
          <div id="colorChange" className="changeColor" ref={colorref} style={{backgroundColor: color}}></div>
        </div>
      </main>
    </div>
  )
}

export default Test1
