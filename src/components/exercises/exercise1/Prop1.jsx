// import React from 'react'
// import Prop2 from './Prop2'

// function Prop1(prop) {
//     let city='tumkur'
//   return (
//     <div>
//       <h1>My name is '{prop.name}'</h1>
//       <Prop2 city={prop.city}></Prop2>
//     </div>
//   )
// }

// export default Prop1


import React, { Component } from 'react'
import Prop2 from './Prop2'

export default class Prop1 extends Component {
  constructor(){
    super()
    this.city="tumkur"
  }
  render(props) {
    return (
      <div>
       <h1>{this.props.name}</h1> 
       <Prop2 city={this.city}></Prop2>
      </div>
    )
  }
}
