// import React from 'react'

// const Home = (props) => {
    
//   return (
//     <div>
//       <h1>My Favourite color is '{props.color}'</h1>
//     </div>
//   )
// }

// export default Home

// *****************************************************

import React, { Component } from 'react'

export default class Home extends Component {
  render(props) {
    return (
      <div>
        <h1>Temperature in my city is '{this.props.temp}'</h1>
      </div>
    )
  }
}

