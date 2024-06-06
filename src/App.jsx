// import React, {Component} from "react";
// import "../src/App.css"
// import Nav from './components/props/Nav'



//<----Functinal based component ----->
// const App= ()=> {
//     return(
//     <>
//    <Nav></Nav>
//     </>
//     )
// }

// export default App


// <---- Class Based component ---->
// export default class App extends Component{
//     render(){
//         return(
//    <NavClass></NavClass>
//         )
//     }
// }

//************************************************* */

//----------------------------props----------------------

// const App=()=> {
//    let name='Vinay'
//      return(
//         <>
//         <Nav name={name}></Nav>
//         </>
//      )
// }

// export default App;


// import React, { Component } from 'react'
// import Nav from "./components/props/Nav";

// export default class App extends Component {
  //    constructor(){
    //       super()
    //       this.city="Tumkuru"
    //    }
    //   render() {
      //     return (
        //       <div>
        //         <Nav city={this.city}></Nav>
        //       </div>
        //     )
        //   }
        // }
        
        
        // import React from 'react'
// import Prop1 from './components/exercises/exercise1/Prop1'

// function App() {
//   let name='vinay'
//   return (
//     <div>
//       <Prop1 name={name}></Prop1>
//     </div>
//   )
// }

// export default App

// import React, { Component } from 'react'
// import Prop1 from './components/exercises/exercise1/Prop1'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.name='vinay'
//   }
//   render() {
  //     return (
    //       <div>
    //         <Prop1 name={this.name}></Prop1>
    //       </div>
    //     )
    //   }
    // }
    
    //****************************************************** */

    //-----------------------States-----------------------------------

    // import React, { Component } from 'react'
    // import State1 from './components/states/State1'
    
    // export default class App extends Component {
    //   render() {
    //     return (
    //       <div>
    //         <State1></State1>
    //       </div>
    //     )
    //   }
    // }

    // import React, { Component } from 'react'
    // import State2 from './components/states/State2'
    
    // export default class App extends Component {
    //   render() {
    //     return (
    //       <div>
    //         <State2></State2>
    //       </div>
    //     )
    //   }
    // }
    
    // import React from 'react'
    // import State3 from './components/exercises/exercise1/State3'
    
    // const App = () => {
    //   return (
    //     <div>
    //       <State3></State3>
    //     </div>
    //   )
    // }
    
    // export default App

//     import React from 'react'
// import State4 from './components/exercises/exercise1/State4'
    
    
//     const App = () => {
//       return (
//         <div>
//           <State4></State4>
//         </div>
//       )
//     }
    
//     export default App

// import React from 'react'
// import Slider from './components/exercises/exercise1/Slider'

// const App = () => {
//   return (
//     <div>
//      <Slider> </Slider>

//     </div>
//   )
// }

// export default App


// ***************************************************************

// import React, { Component } from 'react'
// import Refs2 from './components/refs/Refs2'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//        <Refs2></Refs2>
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react'
// import Refs3 from './components/refs/Refs3'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Refs3></Refs3>
//       </div>
//     )
//   }
// }

// import React from 'react'
// import Refs4 from './components/refs/Refs4'

// const App = () => {
//   return (
//     <div>
//       <Refs4></Refs4>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Test from './components/exercises/exercise1/Test'
// import Test1 from './components/exercises/exercise1/Test1'

// const App = () => {
//   return (
//     <div>
//       {/* <Test></Test> */}
//       <Test1></Test1>
//     </div>
//   )
// }

// export default App


//************************************************************************ */
// Routers

// import React from 'react'
// import Navpage from './components/Router/Navpage'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Productspage from './components/Router/Productspage'
// import Cartpage from './components/Router/Cartpage'
// import Mainpage from './components/Router/Mainpage'

// const App = () => {
//   return (
//     <BrowserRouter>
//     <Navpage></Navpage>

//     <Routes>

//   <Route path='/' element={<Mainpage></Mainpage>}></Route>
//    <Route path='/Products' element={<Productspage></Productspage>}></Route>
//    <Route path='/Cart' element={<Cartpage></Cartpage>}></Route>


//     </Routes>
    
//     </BrowserRouter>
//   )
// }

// export default App

// import React, { Component } from 'react'
// import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
// import Navclasspage from './components/Router/Navclasspage'
// import Homeclasspage from './components/Router/Homeclasspage'
// import Productsclasspage from './components/Router/Productsclasspage'
// import Cartclasspage from './components/Router/Cartclasspage'

// export default class App extends Component {
//   render() {
//     return (
//       <BrowserRouter>
// <Navclasspage></Navclasspage>

// <Routes>

// <Route path='/' element={<Homeclasspage></Homeclasspage>}></Route>
// <Route path='/products'  element={<Productsclasspage></Productsclasspage>}></Route>
// <Route path='/cart' element={<Cartclasspage></Cartclasspage>}></Route>

// </Routes>

//       </BrowserRouter>
//     )
//   }
// }

//*****************Life-cycle************
// import React, { Component } from 'react'
// import Lifecycle from './components/Lifecycle/Lifecycle'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Lifecycle></Lifecycle>
//       </div>
//     )
//   }
// }

// import React, { useState } from 'react'
// import Effecthook from './components/hooks/Effecthook'

// const App = () => {

 
//   return (
//     <div>
//       <Effecthook></Effecthook>
//     </div>
//   )
// }

// export default App


// import React, {  useState } from 'react'
// import axiosInstance from './utils/axiosInstance'

// const App = () => {
 
//   let [data,setData]= useState([])
//   // let inputdata= useRef()

//   let change=(e)=> {
//        setData(e.target.value)
//        e.preventDefault()
//   }

//   let handle=()=> {
//     let payload={
//       data
//     }
//     console.log(data);

//     axiosInstance.post('/users',payload)
  
//   }



//   return (
//     <div>
//       <form action="" onSubmit={handle}>
//         <input type="text" name="" id=""  onChange={change} />
//     <input type="submit" value="submit" />
      
//       </form>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Get from './components/axios/Get'

const App = () => {
  return (
    <div>
      <Get></Get>
    </div>
  )
}

export default App








    
    

