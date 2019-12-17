import React, { Component } from "react";

// Code KeyPad Component Here
class KeyPad extends Component{
    
    evenKeyUp = () => {
        console.log("Entering password...")
    }
    
    
    render(){
        return  <input onKeyUp={this.evenKeyUp} type="password"/>
    }



}

export default KeyPad;
