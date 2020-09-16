import React from 'react'
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

       let state = useFetch('https://www.breakingbadapi.com/api/quotes/1')

       console.log(state)

    return (
        <div className="p-5">
            <h1>hola</h1>
        </div>
    )
}
