import React from 'react'

export default class EyesOnMe extends React.Component{
    render(){

        const handleFocus = () => {
            console.log("Good!");
            
        }

        const handleBlur = () => {
            console.log("Hey! Eyes on me!");
            
        }

        return(
           <button onFocus={handleFocus} onBlur={handleBlur}></button> 
        )
    }
}

// Code EyesOnMe Component Here
