import React, { useCallback, useState } from 'react'

const State4 = () => {

    const[state,setState]=useState(0)

    let changeBackground=()=> {
        setState(state+1)
    }

    let backgroundColor= document.getElementsByTagName('body')

    if(state===0){
        backgroundColor[0].style.backgroundColor='blue'
      }  else if(state>0 && state<=5){
        backgroundColor[0].style.backgroundColor='red'
      } else if(state>5 && state<=10){
        backgroundColor[0].style.backgroundColor='green'
      }


  return (

    <div>
           <h1>The count is {state}</h1>
        <button onClick={changeBackground} style={{height:"40px"}} >Click Me</button>
    </div>
  )
}

export default State4
