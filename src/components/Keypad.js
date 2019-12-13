// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component{
  


    render(){
           
    const handleKeyUp = () => {
        console.log('Entering password...');
        
    }
        return(
            <input type='password' onKeyUp={handleKeyUp}/>
        )
    }
}