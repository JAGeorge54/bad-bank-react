import UserContext from '../context/UserContext';
import { createUser } from '../api';
import { useState } from 'react';


function CreateAccount() {
    
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        balance: 100,
        admin: true,
        history: []
    });

    function handleChange (e) {
        setUser({ ...user, [e.target.name]: e.target.value});
    };

    async function handleSubmit(e) {
        e.preventDefault();
        let response = await createUser(user);
        if (response.status !== 200) {
            alert('user account could not be created');
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder={'Name'} onChange={handleChange} name='name' required maxLength={20}/>
            <input placeholder={'Email'} onChange={handleChange} name='email' required maxLength={40}/>
            <input placeholder={'Password'} onChange={handleChange} name='password' type='password' required maxLength={20}/>
            <button type='submit'>Create Account</button>
        </form>
    )
}

export default CreateAccount;