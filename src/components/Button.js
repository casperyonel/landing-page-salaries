import axios from 'axios';
import React, {useState} from "react";

    // taret is teh username, using setusername as the function to creeate and add the new state, 

const Button = () => {
    const [email, setEmail] = useState("");

    const submit = e => {

        e.preventDefault()

        // let email = e.target.value 
         
        axios.post('/waitlist', { email })
        .then(res => console.log(res.data))
        .catch(err => console.log(err.res.data))
    }
    
    return (
        <form >
            <label>
                Email: 
                 <input placeholder="email" type="text" onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <button onClick={submit} type="submit" className='btn'>Join the Waitlist</button>
        </form>
    )
}
    
export default Button