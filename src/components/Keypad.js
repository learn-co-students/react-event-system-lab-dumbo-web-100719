// Code Keypad Component Here
import React, { Component } from 'react';

class Keypad extends Component {

    keyUpFunction = () =>{
        console.log('Entering password...')
    }
    render() {
        return (
            <div>
                <input type="password" onKeyUp={this.keyUpFunction}/>
            </div>
        );
    }
}

export default Keypad;