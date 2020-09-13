import React , {useState}from 'react'

export const CounterApp = () => {
    const [counter, setCounter] = useState({
        counter1 : 10,
        counter2 : 20
    })

    let { counter1, counter2} = counter

    return (
        <div className="p-5">
            <h1>Cuenter1: {counter1}</h1>
            <h1>Cuenter2: {counter2}</h1>
            <hr/>
            <button className="btn  btn-primary"
                onClick={()=> setCounter({...counter, counter1: (counter1 +1) })}
            >
                +1
            </button>
            
        </div>
    )
}
