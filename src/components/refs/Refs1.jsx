import React, { Component, createRef } from 'react'

export default class Refs1 extends Component {
constructor(){
    super()
    this.state={
name:'javascript'
    }

    this.h1ref= createRef()

}

click=()=>{
    this.h1ref.current.style.backgroundColor='red'
}


  render() {
    return (
      <div>
          <h1 ref={this.h1ref}>{this.state.name}</h1>
          <button onClick={this.click} >Click</button>
      </div>
    )
  }
}
