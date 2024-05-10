// import React from 'react'
// import Home from './Home'

// const Nav = (props) => {
//     let color='Red'
//   return (
//     <div>
//       <h1>My Name is '{props.name}'</h1>
//       <Home color={color}></Home>
//     </div>
//   )
// }

// export default Nav


// *******************************************************************
import React, { Component } from 'react'
import Home from './Home'

export default class Nav extends Component {
  constructor(){
    super()
    this.temperature='36.00deg'
  }
  render(props) {
    return (
      <div>
        <h1>My city name is '{this.props.city}'</h1>
        <Home temp={this.temperature}></Home>
      </div>
    )
  }
}
