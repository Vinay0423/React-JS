import React, { useRef, useState } from 'react'

const Refs4 = () => {

    let[state,setState]=useState('')

    let nameref= useRef()

    let onSubmitChange=(e)=> {
        setState(nameref.current.value)
        e.preventDefault()
    }

  return (
    <div>
        <form action="" onSubmit={onSubmitChange}>
        Name: <input type="text" name="" id="" ref={nameref}   /> <br />
      <input type="submit" value="Submit" />
        </form>
   
      <h1>{state}</h1>
    </div>
  )
}

export default Refs4
