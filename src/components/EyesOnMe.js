import React from 'react'

export default class EyesOnMe extends React.Component{
    handleFocusButton = () => console.log("Good!")


    handleBlurButton = () => console.log("Hey! Eyes on me!")
    
    render(){
        return(
            <div>
                <button onFocus={this.handleFocusButton} onBlur={this.handleBlurButton}></button>
            </div>
        )
    }
}