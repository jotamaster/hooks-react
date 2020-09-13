import React from 'react'
import { useCouter } from '../../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const {state: count, increment, decrement, reset } = useCouter()
    return (
        <div className="p-5">
            <h1>CounterWithCustomHook {count}</h1>
            <hr/>
            <button 
                className="btn btn-success mr-2"
                onClick={()=>increment(2)}
            >
                +1
            </button>
            <button 
                className="btn btn-danger mr-2"
                onClick={()=>decrement()}
            >
                -1
            </button>
            <button
                className="btn btn-warning"
                onClick={reset}
            >
                reset
            </button>
        </div>
    )
}
