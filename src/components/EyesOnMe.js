// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends Component {

    onFocusFunction = () =>{
        console.log('Good!')
    }

    onBlurFunction = () =>{
        console.log('Hey! Eyes on me!')
    }

    render() {
        return (
            <div>
               <button onFocus={this.onFocusFunction} onBlur={this.onBlurFunction}>Button</button> 
            </div>
        );
    }
}

export default EyesOnMe;