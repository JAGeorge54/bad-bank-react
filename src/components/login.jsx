import UserContext from '../context/UserContext';
import { verifyUser } from '../api';
import { useState } from 'react';


function Login() {
    
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    function handleChange (e) {
        setUser({ ...user, [e.target.name]: e.target.value});
    };

    async function handleSubmit(e) {
        e.preventDefault();
        let response = await verifyUser(user);
        console.log(response);
        
    };

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder={'Email'} onChange={handleChange} name='email' required maxLength={40}/>
            <input placeholder={'Password'} onChange={handleChange} name='password' type='password' required maxLength={20}/>
            <button type='submit'>Login</button>
        </form>
    )
}

export default Login;