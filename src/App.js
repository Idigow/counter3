import React from 'react';
import ButtonPlus from "./ButtonPlus";
import ButtonMinus from "./ButtonMinus";
import Reset from "./Reset";
import {useDispatch, useSelector} from "react-redux";

function App(props) {
    const counter = useSelector(state => state);
    return (
        <div>
            {counter}
            <ButtonPlus/>
            <ButtonMinus/>
            <Reset/>
        </div>
    );
}

export default App;