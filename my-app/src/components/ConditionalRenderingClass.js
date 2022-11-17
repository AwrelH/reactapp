import React, { Component } from 'react'

export default class ConditionalRenderingClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded:false,
         isLoggedIn: true
      }
    }
  render() {
    return (
      <div>
        <h1>
            {this.state.isLoaded ? 'data loaded': 'loading...'}
            {this.state.isLoggedIn? (
                <div>
                    <p>Welcome to the site</p>
                    <ol>
                        <li> confirm mail </li>
                        <li> complete profile</li>
                        <li> subscribe to newsletter</li>
                    </ol>
                </div>
            ): (
                <p>
                    Please sign in
                </p>
            )}
        </h1>
      </div>
    )
  }
}
