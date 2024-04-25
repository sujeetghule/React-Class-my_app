import React from 'react'
import { useState } from 'react'

const UseEffect3 = () => {
    let [count, setCount] = useState(0)

    let add=()=>{
        setCount(count+1)
        document.title=count
    }
    return (
        <div><p>UseEffect3</p>

            <h1>{count}</h1>
            <button onClick={add}>Add</button>
        </div>
    )
}

export default UseEffect3