//it is only in class-based

import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(){
        console.log('constructor will execute first');
        super()
        this.state={
            count:0
        }
    }

    change=()=> {
        this.setState({count:this.state.count+1})
    }

    componentDidMount=()=> {
        console.log('im mounting');
    }

    componentDidUpdate=()=>{
        console.log('im updating');
    }
     componentWillUnmount=()=> {
    //    alert('im dead')
     }

  render() {
    console.log('im rendering');
    return (
      <div>
        <button onClick={this.change}>Click Me</button>
        <h1>Count is {this.state.count}</h1>
      </div>
    )
  }
}
