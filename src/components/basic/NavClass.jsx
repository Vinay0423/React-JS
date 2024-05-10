import React, { Component } from "react";
import LogoClass from "./LogoClass";
import HomeClass from "./HomeClass";
import CartClass from "./CartClass";



export default class NavClass  extends Component{
render(){
    return(
        <>
        <nav id='max'>
            <LogoClass></LogoClass>
            <HomeClass></HomeClass>
            <CartClass></CartClass>
        </nav>
        </>
    )
}
}