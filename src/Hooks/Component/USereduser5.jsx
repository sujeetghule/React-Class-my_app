
import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
};

let reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return { firstCounter: state.firstCounter + action.value};
        case "decrement":
            return { firstCounter: state.firstCounter - action.value };
        case "reset":
            return initialState;
        default:
            return state;
    }
};

function USereduser5() {
    let [count1, dispatch1] = useReducer(reducer, initialState);
    let [count2, dispatch2] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>{count1.firstCounter}</h1>
            <button className='btn btn-warning m-2' onClick={() => { dispatch1({ type: "increment" ,value:1}) }}>Increment</button>
            <button className='btn btn-warning m-2' onClick={() => { dispatch1({ type: "decrement" ,value:1}) }}>Decrement</button>
            <button className='btn btn-warning m-2' onClick={() => { dispatch1({ type: "reset" }) }}>Reset</button>
            <h1>{count2.firstCounter}</h1>
            <button className='btn btn-warning m-2' onClick={() => { dispatch2({ type: "increment" ,value:5}) }}>Increment</button>
            <button className='btn btn-warning m-2' onClick={() => { dispatch2({ type: "decrement" ,value:5 }) }}>Decrement</button>
            <button className='btn btn-warning m-2' onClick={() => { dispatch2({ type: "reset" }) }}>Reset</button>
        </div>
    );
}

export default USereduser5;
