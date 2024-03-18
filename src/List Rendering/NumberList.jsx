import React from 'react'

function NumberList() {
    let names = ["Ajay","Vijay","Sunjay","Dhananjay"]
    let namelist = names.map(name=><h1>{name}</h1>)
  return (
    <div>
        <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[3]}</h2>
        <hr />
        {namelist}
    </div>
  )
}

export default NumberList