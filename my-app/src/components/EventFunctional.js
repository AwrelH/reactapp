import React from 'react'

function EventFunctional() {
    function clickHandler() {
        console.log('clicked the class component')
        
    }
  return (
    <div>
        <button onClick={clickHandler}> click me - functional component </button> 

    </div>
  )
}

export default EventFunctional