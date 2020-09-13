

import {useState} from 'react'


export const useCouter = (initialState = 1) => {
    const [state, setstate] = useState(initialState)

    const increment = (factor = 1) =>{
       setstate(state+factor) 
    }

    const decrement = (factor= 1) =>{
        setstate(state-factor) 
    }

    const reset = () => {
        setstate(initialState)
    }

    return {
        state,
        increment,
        decrement,
        reset
    }

}