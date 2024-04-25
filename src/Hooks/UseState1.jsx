import React, { useState } from 'react'

const UseState1 = () => {
    let [count, setCount] = useState(0)
    return (
        <div>
            <p>UseState 1</p>

            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Increment</button>
        </div>
    )
}

export default UseState1