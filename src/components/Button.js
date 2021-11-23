import axios from 'axios';
import React, {useState} from "react";

    // taret is teh username, using setusername as the function to creeate and add the new state, 

const Button = () => {
    const [email, setEmail] = useState({
        email: ''
    })

    const submit = e => {

        e.preventDefault()

        // let email = e.target.value 
        // this.state = {
        //     email: ''
        // }

        axios.post('/waitlist', { email })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    
    }
    
    return (
        <form >
            <label>
                Email: 
                 <input placeholder="email" type="text" onfocus="this.value=''" onChange={e => setEmail(e.target.value)}/>
            </label>
            <button onClick={submit} type="submit" className='btn'>Join the Waitlist</button>
        </form>
    )
}

// both enter and click button works, why?
    
export default Button