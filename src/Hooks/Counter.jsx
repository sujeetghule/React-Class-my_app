import React, { useState } from 'react'
import UseEffect7 from './UseEffect7'

const Counter = () => {
    const [display, setDisplay] = useState(true)
   



    return (
        <div><p>Counter</p>

            <button onClick={()=>{setDisplay(!display)}}>Toggele Button</button>
          {
            display&&<UseEffect7></UseEffect7>
          }
           </div>
    )
}

export default Counter