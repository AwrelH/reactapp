import React, { Component } from 'react'
import MethodsAsPropsChild from './MethodsAsPropsChild'

class MethodsAsPropsParent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
        }
        
    }
    signInHandler = () => {
        this.setState({
            isLoggedIn: true
        })
    }
    signOutHandler = () => {
        this.setState({
            isLoggedIn: false
        })
          // single method that handles both SignIn and SignOut
//   toggleIsLoggedIn = () => {
//     this.setState((prevState) => ({
//       isLoggedIn: !prevState.isLoggedIn,
//     }));
//   };
    }
    render() {
        return (
            <div>
                <MethodsAsPropsChild
                 isLoggedIn={this.state.isLoggedIn}
                 signInHandler={this.signInHandler}
                 signOutHandler={this.signOutHandler}
                 />
            </div>
        )
    }
}

export default MethodsAsPropsParent