import React, { useReducer } from 'react'
const initialState = 0;
let reduser=(state,action)=>{
    switch(action){
        case "increment":
            return state+1;
        case "decrement":
            return state-1;
        case "reset":
            return initialState;
        default :
            return state;
    }
}
function UseReduser1() {
    let [count , dispach] = useReducer(reduser,initialState)
  return (
    <div>
        <h1>{count}</h1>
        <button className='btn btn-warning m-2 ' onClick={()=>{dispach("increment")}}>Oncrement </button>
        <button className='btn btn-warning m-2 ' onClick={()=>{dispach("decrement")}}>Decrement</button>
        <button className='btn btn-warning m-2 ' onClick={()=>{dispach("reset")}}>Reset</button>
    </div>
  )
}

export default UseReduser1