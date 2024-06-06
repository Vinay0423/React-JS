import React from 'react'
import './Router.css'
import { Link } from 'react-router-dom'

const Navpage = () => {
  return (
    <div>
      <nav id='nav'>
   
      <Link to='/'> <img src="https://www.hatchwise.com/wp-content/uploads/2022/08/Amazon-Logo-2000-present-1024x576.jpeg" alt="" /></Link>
      <Link to='/Products'> <h1>Products</h1></Link>
      <Link  to='/Cart' > <h1>Cart</h1></Link>
      

      </nav>
    </div>
  )
}

export default Navpage
