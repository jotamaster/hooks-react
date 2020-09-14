import React, { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
        console.log('componente montado')
        return () => {
            console.log('componente desmontado')
        }
    }, [])

    return (
        <div>
            <h1>mensaje</h1>
        </div>
    )
}
