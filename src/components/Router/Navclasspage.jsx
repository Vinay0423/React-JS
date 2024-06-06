import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Router.css'

export default class Navclasspage extends Component {
  render() {
    return (
        <div>
            <nav id='nav'>
            <Link to='/'> <img src="https://www.hatchwise.com/wp-content/uploads/2022/08/Amazon-Logo-2000-present-1024x576.jpeg" alt="" /></Link>
          <Link to='/products'><h1>Products</h1></Link>
          <Link to='/cart' ><h1>Cart</h1></Link>
          </nav>
      </div>
    )
  }
}
