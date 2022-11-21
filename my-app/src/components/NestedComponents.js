import React, { Component } from 'react'
import UserMessage from './UserMessage'
import UserData from './UserData'

export default class NestingComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded:true,
         isLoggedIn: false
      }
    }
  render() {
    return (
      <div>
        {this.state.isLoggedIn? (
                   <div></div>
                ): (
                    <form>
                    <label for="username">username:</label>
    <input type="text" id="name" name="name" />
    <label for="password">password:</label>
    <input type="password" id="password" name="password" />
    <button onClick={()=> {this.handleClick()}}>{this.state.text}</button>
                    </form>
                )}
      </div>
    )
  }
}
