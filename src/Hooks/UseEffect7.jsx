import React, { useState } from 'react'
import { useEffect } from 'react'

const UseEffect7 = () => {
    const [x, setx] = useState(0)
    const [y, sety] = useState(0)

    const logPosition = (e) => {
        setx(e.clientX)
        sety(e.clientY)
        console.log("mouse move")

    }
    useEffect(() => {
        console.log("use effect")
        window.addEventListener("mouseover", logPosition)
        return ()=>{
            window.removeEventListener("mouseover", logPosition)
        }
    })

    return (
        <div>
            <p>UseEffect7</p>
            <h1>X: {x}</h1>
            <h1>Y : {y}</h1>


        </div>
    )
}

export default UseEffect7