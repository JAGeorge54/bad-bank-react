import UserContext from '../context/UserContext';
import { createUser } from '../api';
import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


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
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <Input placeholder={'Name'} onChange={handleChange} name='name' required maxLength={20} className='mb-2'/>
            <Input placeholder={'Email'} onChange={handleChange} name='email' required maxLength={40} className='mb-2'/>
            <Input placeholder={'Password'} onChange={handleChange} name='password' type='password' required maxLength={20} className='mb-2'/>
            <Button type='submit' className='mb-4'>Create Account</Button>
        </form>
    )
}

export default CreateAccount;