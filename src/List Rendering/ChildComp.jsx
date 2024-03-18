import React from 'react'

function ChildComp({key,persone1}) {
    
  return (
    <>
    {key}
     <h3>Hi... My name is {persone1.name}, I'm {persone1.age} Year old, I have Strong Skills in {persone1.skills}</h3>
    </>
  )
}

export default ChildComp