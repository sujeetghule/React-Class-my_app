import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffect2 = () => {
    let [count, setCount] = useState(0)

    useEffect(() => {
        document.title = count
        console.log("Hello")
    })
    return (
        <div><p>UseEffect2</p>

            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1) }>Add</button>
        </div>
    )
}

export default UseEffect2