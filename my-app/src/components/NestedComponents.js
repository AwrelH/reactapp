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
        <h1>
            <UserData isLoaded={this.state.isLoaded} />
            <UserMessage isLoggedIn={this.state.isLoggedIn} />
            
        </h1>
      </div>
    )
  }
}
