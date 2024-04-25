import React, { useState } from 'react'

const UseState4 = () => {
    let [name, setName] = useState({ firstName: "", lastName: "" })

    return (
        <div><p>UseState4</p>
            <input type="text" placeholder='Enter First Name' value={name.firstName} onChange={(e)=>setName({...name,firstName:e.target.value})}/>
            <input type="text" placeholder='Enter Last Name' value={name.lastName} onChange={(e)=>setName({...name,lastName:e.target.value})}/>
            <h1>First Name  : {name.firstName}</h1>
            <h1>Last Name : {name.lastName}</h1>
            {console.log(name.firstName)}
            <h3>{JSON.stringify(name)}</h3>
        </div>
    )
}

export default UseState4