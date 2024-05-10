// import React from 'react'
// import Prop3 from './Prop3'

// function Prop2(prop) {
//     let age=26
//   return (
//     <div>
//       <h1>Im am from '{prop.city}</h1>
//       <Prop3 age={age}></Prop3>
//     </div>
//   )
// }

// export default Prop2


import React, { Component } from 'react'
import Prop3 from './Prop3'


export default class Prop2 extends Component {
  constructor(){
    super()
    this.age=26
  }
  render(props) {
    return (
      <div>
        <h1>{this.props.city}</h1>
        <Prop3 age={this.age}></Prop3>
      </div>
    )
  }
}
