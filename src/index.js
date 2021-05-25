import ReactDOM from 'react-dom'
import {Provider} from "react-redux";
import {createStore} from "redux";
import App from "./App";

const initialState = 0;

const reducer = (state = initialState, action)=>{
    switch (action.type){
        case 'plus': state ++; break;
        case 'minus': state --; break;
        case 'reset': state =0; break;
    }
    return state;
}

const store = createStore(reducer);


ReactDOM.render(
        <Provider store={store}>
                <App/>
        </Provider>,
    document.getElementById('root')
)