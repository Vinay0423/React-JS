import React, { Component, createRef } from 'react'
import './Refs.css'

export default class Refs3 extends Component {

    constructor(){
        super()
        this.state={
            count:0
        }

   this.itemsref= createRef()
   this.amountRef=createRef()
    }


    onSelect=()=>{
       this.setState({count:this.state.count+1})
      }
    
  render() {
    return (
      <div>
        <section>
            <nav>
                <div>Cart</div>
            </nav>
            <main>
                <div className="conatiner1">
                    <h1>Items</h1>
                    <h1 ref={this.itemsref} >{this.state.count}</h1>
                    <button onClick={this.onSelect}>select</button>
                </div>
                <div className="conatiner2">
                    <h1 ref={this.amountRef}>{this.state.count*1000}</h1>
                    <h1>Price</h1>
                </div>
            </main>
        </section>
      </div>
    )
  }
}
