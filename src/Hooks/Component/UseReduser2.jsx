import React, { useReducer } from 'react'
const initialState = {
    firstCounter:0,
};
let reduser=(state,action)=>{
    switch(action.type){
        case "increment":
            return {firstCounter:state.firstCounter+1};
        case "decrement":
            return {firstCounter:state.firstCounter-1};
        case "reset":
            return initialState;
        default :
            return state;
    }
}
function UseReduser2() {
    let [count , dispach] = useReducer(reduser,initialState)
  return (
    <div>
        <h1>{count}</h1>
        <button className='btn btn-warning m-2 ' onClick={()=>{dispach({type:"increment"})}}>Oncrement </button>
        <button className='btn btn-warning m-2 ' onClick={()=>{dispach({type:"decrement"})}}>Decrement</button>
        <button className='btn btn-warning m-2 ' onClick={()=>{dispach({type:"reset"})}}>Reset</button>
    </div>
  )
}

export default UseReduser2