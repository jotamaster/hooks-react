import React, { useEffect } from 'react'

export const Message = () => {

    const mouseMove = ({x,y})=>{
        console.log({x,y})
    }

    useEffect(() => {
        window.addEventListener('mouseover',mouseMove) 
        return () => {
            window.removeEventListener('mouseover',mouseMove)
        }
    }, [])

    return (
        <div>
            <h1>mensaje</h1>
        </div>
    )
}
