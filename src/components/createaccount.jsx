import UserContext from '../context/UserContext';
import { createUser } from '../api';
import { useState } from 'react';


function CreateAccount() {
    
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });

    function handleChange (e) {
        setUser({ ...user, [e.target.name]: e.target.value});
    };

    async function handleSubmit() {
        let response = await createUser(user);
        if (response !== 200) {
            alert('user account could not be created');
        }
    };

    return(
        <form onSubmit={handleSubmit}>
            <input placeholder={'Name'} onChange={handleChange} name='name' required maxLength={20}/>
            <input placeholder={'Email'} onChange={handleChange} name='email' required maxLength={40}/>
            <input placeholder={'Password'} onChange={handleChange} name='password' required maxLength={20}/>
            <button type='submit'>Create Account</button>
        </form>
    )
}

export default CreateAccount;