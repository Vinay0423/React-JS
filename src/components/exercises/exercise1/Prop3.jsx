// import React from 'react'
// import Prop4 from './Prop4'

// function Prop3(prop) {
// let dob= "23-02-1998"

//   return (
//     <div>
//       <h1 >My age is {prop.age}</h1>
//       <Prop4 dob={dob}> </Prop4>
//     </div>
//   )
// }

// export default Prop3

import React, { Component } from 'react'
import Prop4 from './Prop4'

export default class Prop3 extends Component {
  constructor(){
    super()
    this.dob="23-02-1998"
  }
  render(props) {
    return (
      <div>
        <h1>{this.props.age}</h1>
        <Prop4 dob={this.dob}></Prop4>
      </div>
    )
  }
}

