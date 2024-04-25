import React, { useState } from 'react'

function UseState3() {
    let initialValue = 0;
    let [count, setCount] = useState(initialValue)


    return (
        <div>
            <p>UseState 3</p>
            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>INcrement</button>
            <button onClick={() => { setCount(count - 1) }}>Decreamnet</button>
            <button onClick={() => { setCount(initialValue) }}>Reset</button>
        </div>
    )
}

export default UseState3