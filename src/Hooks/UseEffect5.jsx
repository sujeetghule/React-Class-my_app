import React, { useState } from 'react'
import { useEffect } from 'react';

const UseEffect5 = () => {
    let [count, setCount] = useState(0);
    let [name, setName] = useState("")

    useEffect(() => {
        document.title = count;
        console.log("Component Updates")
    }, [count])

    return (
        <div><p>UseEffect5</p>
            <input type="text" value={name} onChange={(e) => {setName(e.target.value) }} />
            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Add</button>
        </div>
    )
}

export default UseEffect5