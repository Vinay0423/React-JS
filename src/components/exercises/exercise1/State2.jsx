import React, { Component } from 'react'

export default class State2 extends Component {

    constructor(){
        super()
        this.state={
            count:0,
        }
    }

    changeBackground=()=> {
  
        // if(this.state['count']<0){
        //     document.getElementsByTagName('body')[0].style.backgroundColor='blue'
        // }

        // if(this.state['count']==0 && this.state['count']<=4 ){

        //     document.getElementsByTagName('body')[0].style.backgroundColor='red'

        // } else if(this.state['count']>=5 ){
        //     document.getElementsByTagName('body')[0].style.backgroundColor='green'
        // }
        this.setState({count:this.state['count']+1})
    }

  render() {

    let backgroundColor= document.getElementsByTagName('body')

    if(this.state['count']===0){
      backgroundColor[0].style.backgroundColor='blue'
    }  else if(this.state['count']>0 && this.state['count']<=5){
      backgroundColor[0].style.backgroundColor='red'
    } else if(this.state['count']>5 && this.state['count']<=10){
      backgroundColor[0].style.backgroundColor='green'
    }
 
    return (
      <div>
        <h1>The count is {this.state.count}</h1>
        <button onClick={this.changeBackground}  >Click Me</button>
      </div>
    )
  }
}
