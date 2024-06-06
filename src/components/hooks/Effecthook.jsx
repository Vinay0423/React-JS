import React, { useEffect } from 'react'
import { useState } from 'react'

const Effecthook = () => {

    const [state,setState]=useState(0)


let randomNumber=()=> {
 setState(Math.floor(Math.random()*1000));
}

useEffect(()=> {
  console.log('rendered');
  return console.log('umnounted');
},[state])

  return (
    <div>
      <button onClick={randomNumber}>Random</button>
      <h1>The random number is {state}</h1>
    </div>

  )
}

export default Effecthook
