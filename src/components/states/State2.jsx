import React, { useState } from 'react'

const State2 = () => {

    const[state,setState]=useState('Javascript')

    let changeHeader=()=> {
        setState("React Js")
    }

  return (
    <div>
      
      <h1>{state}</h1>
     <button onClick={changeHeader}  style={{height:"20px"}}></button>
    </div>
  )
}

export default State2
