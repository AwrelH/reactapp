import React from 'react'

function UserMessage(props) {
  return (
    <div>
        {
        props.isLoggedIn? (
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
    </div>
  )
}

export default UserMessage