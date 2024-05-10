import React, { Component } from 'react'

export default class State1 extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }

    incrementHandle=()=> {
       this.setState({count:this.state['count']+1})
    }

    decrementHandle=()=> {
        this.setState({count:this.state['count']-1})
    }

  render() {
    return (
      <div>
        <h1>The count is '{this.state.count}'</h1>
        <button  onClick={this.incrementHandle}>Increment</button>
        <button  onClick={this.decrementHandle}>Decrement</button>
      </div>
    )
  }
}
