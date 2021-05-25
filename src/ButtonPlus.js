import React from 'react';
import {useDispatch} from "react-redux";

function ButtonPlus(props) {

    const dispatch = useDispatch()

    const handlePlus = ()=>{
        dispatch({type: 'plus'})
    }

    return (
        <div>
            <button onClick={handlePlus}>+</button>
        </div>
    );
}

export default ButtonPlus;