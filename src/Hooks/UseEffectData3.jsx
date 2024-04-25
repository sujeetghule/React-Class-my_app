import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const UseEffectData3 = () => {
    let [count,setCount] = useState(0)
    useEffect(()=>{
        let interval = setTimeout(()=>{ setCount(count+1);},1000)
        return()=>{
            clearInterval(interval)
        }
    },[count])
  return (
    <div><p>UseEffectData3</p>
    <h1>{count}</h1></div>
  )
}

export default UseEffectData3