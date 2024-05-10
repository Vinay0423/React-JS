import React, { Component, createRef } from 'react'

export default class Refs2 extends Component {
 constructor(){
    super()
    this.state={
        name:""
    }

    this.h1ref= createRef()
    this.nameFieldref= createRef()
 }

 submit=()=> {
    this.setState({name:this.nameFieldref.current.value})
 }

  render() {
    return (
      <div>
        <form action="" onSubmit={this.submit}>
            Name: <input type="text" name="" id="" ref={this.nameFieldref}/>
            <input type="submit" value="Submit" />
        </form>

        <h1 ref={this.h1ref}>{this.state.name}</h1>
      </div>
    )
  }
}
