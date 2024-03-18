import React from 'react'

function ChildClass(props) {
  return (
    <div>
        <button onClick={props.greetHandler}> 
            Click ME
        </button>
    </div>
  )
}

export default ChildClass