import React, {useState, useEffect} from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    }) 

    let {name, email} = formState

    useEffect(()=>{
        console.log('hola')

    },[email])

    const handleInputChange = ({target})=>{

      setFormState({
        ...formState,
        [target.name]: target.value
      })
    }


    return (
        <div className="p-5">
            <h1>UseEffect</h1>
            <hr/>
            Name: {name}
            <hr/>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                id="name"
                className="fonr-control"
                placeholder="your name"
                autoComplete="off"
                value={name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="email" 
                id="email"
                className="fonr-control"
                placeholder="your enail"
                autoComplete="off"
                value={email}
                onChange={handleInputChange}
              />
            </div>
            { name && <Message></Message>}
        </div>
    )
}
