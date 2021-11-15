import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreateRemove, actionCreateAdd } from '../store/actions/actions'


export default function Counter() {

    const dispatch = useDispatch()
    const count = useSelector(state => state.count)

    function handleClick(e){
        switch(e.target.innerHTML){
        case '+':
            dispatch(actionCreateAdd(1))
        break;
        case '-':
            dispatch(actionCreateRemove(1))
        break;
        default:
        break;
        }
    }


    return (
        <div className="App">
            <h1>{count}</h1>
            <button onClick={handleClick}>+</button>
            <button onClick={handleClick}>-</button>
        </div>
    )
}
