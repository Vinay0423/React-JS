import React, { useState } from 'react'

const State3 = () => {

    const[state,setState]=useState(0)

    let incrementHandle=()=> {
        setState(state+1)
    }

    let decrementHandle=()=> {
        setState(state-1)
    }
  return (
    <div>
       <h1>The count is '{state}'</h1>
        <button  onClick={incrementHandle} style={{height:"20px",width:"90px"}}>Increment</button>
        <button  onClick={decrementHandle}>Decrement</button>
    </div>
  )
}

export default State3
