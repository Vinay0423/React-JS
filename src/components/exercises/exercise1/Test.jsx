import React, {  useRef, useState } from 'react'
import './Test.css'

const Test = () => {

    const [state,setState]= useState(0)
  
    
    let colorRef= useRef()
    // const color=  document.getElementById('colorChange');

    
let changeColor=()=> {
     if(state>=1 && state<6){
          colorRef.current.style.backgroundColor='blue'
      } else if(state>=6 && state<11){
          colorRef.current.style.backgroundColor='green'
      } else if(state>=11 && state<=15){
          colorRef.current.style.backgroundColor='purple'
      }
    setState(state+1)
}

if(state===0){
    colorRef.current.style.backgroundColor='red'
}







  return (

    


    <div>
        <main>
        <div className="countcontainer">
            <h1>{state}</h1>
            <button className="ChangeButton" onClick={changeColor}>Change</button>
        </div>

<div className="color">
    <h1>Color</h1>
    <div id="colorChange" className="changeColor"  ref={colorRef}>

    </div>
</div>
</main>
    </div>

  )
}

export default Test
