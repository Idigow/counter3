import React from 'react';
import {useDispatch} from "react-redux";

function ButtonMinus(props) {
    const dispatch = useDispatch()

    const handleMinus = ()=>{
        dispatch({type: 'minus'})
    }
    return (
        <div>
            <button onClick={handleMinus}>-</button>
        </div>
    );
}

export default ButtonMinus;