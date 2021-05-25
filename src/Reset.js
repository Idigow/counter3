import React from 'react';
import {useDispatch} from "react-redux";

function Reset(props) {
    const dispatch = useDispatch()

    const handleReset = ()=>{
        dispatch({type: 'reset'})
    }
    return (
        <div>
            <button onClick={handleReset}>reset</button>
        </div>
    );
}

export default Reset;