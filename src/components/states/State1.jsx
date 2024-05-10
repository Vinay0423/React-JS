import React, { Component } from 'react'

export default class State1 extends Component {
    constructor(){
        super()
        

        this.state={
            name:'Javascript'
        }
        
    }

    changeHandle=()=> {
        this.setState({name:'React Js'})
        document.getElementsByTagName('body')[0].style.backgroundColor='orange'
        document.getElementsByTagName('h1')[0].style.backgroundColor='darkgreen'

    }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.changeHandle}>Click Me</button>
      </div>
    )
  }
}
