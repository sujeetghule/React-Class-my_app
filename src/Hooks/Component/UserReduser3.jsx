import React, { useReducer } from 'react'
const initialState = {
    firstCounter: 0,
    secondCounter: 10,
};
let reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { ...state, firstCounter: state.firstCounter + 1 };
        case "decrement":
            return { ...state, firstCounter: state.firstCounter - 1 };
        case "increment5":
            return { ...state, firstCounter: state.secondCounter + 5 };
        case "decrement5":
            return { ...state, firstCounter: state.secondCounter- 5 };
        case "reset":
            return initialState;
        default:
            return state;
    }
}
function UseReduser3() {
    let [count, dispach] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{count}</h1>
            <button className='btn btn-warning m-2 ' onClick={() => { dispach({ type: "increment" }) }}>Oncrement </button>
            <button className='btn btn-warning m-2 ' onClick={() => { dispach({ type: "decrement" }) }}>Decrement</button>
            <button className='btn btn-warning m-2 ' onClick={() => { dispach({ type: "reset" }) }}>Reset</button>
            <button className='btn btn-warning m-2 ' onClick={() => { dispach({ type: "increment5" }) }}>Oncrement </button>
            <button className='btn btn-warning m-2 ' onClick={() => { dispach({ type: "decrement5" }) }}>Decrement</button>
            
        </div>
    )
}

export default UseReduser3