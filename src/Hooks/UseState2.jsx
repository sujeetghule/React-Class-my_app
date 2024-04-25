import React, { useState } from 'react'

const UseState2 = () => {
    let [count, setCount] = useState(0)

    let increment = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <p>UseState 2</p>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button></div>
    )
}

export default UseState2