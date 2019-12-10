// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {
    goodFunc = () => {
        console.log("Good!")
    }

    lookFunc = () => {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return <button 
            onFocus={this.goodFunc}
            onBlur={this.lookFunc} >
        </button>
    }
}