import React from 'react'

export const DefaultProps1 = (props) => {
  return (
    <div>
        <h1>My name in defalut Props is {props.name}</h1>
    </div>
  )
}

DefaultProps1.defaultProps={
    name:"Jay"
}