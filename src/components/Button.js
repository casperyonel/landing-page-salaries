import axios from 'axios';
import React, {useState} from "react";

    // taret is teh username, using setusername as the function to creeate and add the new state, 

const Button = () => {
    let [email, setEmail] = useState({
        email: ''
    })

    const submit = e => {


        e.preventDefault()

        if (!e.target.value === '') {
            alert('Please add an email')
            return
        }
        // this doesn't work currently

        axios.post('/waitlist', { email })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    
        setEmail('')

    }
    
    return (
        <form >
            <label>
                Email: 
                 <input placeholder="email" type="text" onChange={e => setEmail(e.target.value)}/>
            </label>
            <button onClick={submit} className='btn'>Join the Waitlist</button>
        </form>
    )
}

// both enter and click button works, why?
    
export default Button