import React from 'react'

function UserData(props) {
  return (
    <div>
          <h1>
          {props.isLoaded ? 'data loaded': 'loading...'}
          </h1>

    </div>
  )
}

export default UserData