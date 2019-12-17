import React, { Component } from "react";

// Code EyesOnMe Component Here
class EyesOnMe extends Component{
    
    onFocusHandler = () => {
        console.log('Good!')
    }

    onBlurHander = () => {
        console.log("Hey! Eyes on me!")
    }

    render(){
        return <button onFocus={this.onFocusHandler} onBlur={this.onBlurHander} />
    }



}

export default EyesOnMe;