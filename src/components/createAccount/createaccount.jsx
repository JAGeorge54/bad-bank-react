import { useState, useContext } from 'react';
import UserContext from '../../context/UserContext'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './createAccount.css'

function CreateAccount() {
    const {users, setUsers} = useContext(UserContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        setUsers([...users, {name, email, password, "balance": 100}])
        //figure out how to clear form badbankstandalone/creataccount
        let nameReset = document.getElementById('name');
        nameReset = '';
    }

    return(
        <div id='card' className="d-flex justify-content-center col text-center">
                <Card bg='secondary' text='white' border='dark' style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Create Account</Card.Title>
                        <Card.Text>
                            <p>Name</p>
                            <input 
                                type='text' 
                                id='name' 
                                placeholder='Enter a Name' 
                                onChange={e => {
                                    setName(e.currentTarget.value)
                                }}/><br/><br/>
                            <p>Email</p>
                            <input 
                                type="text" 
                                id="email" 
                                placeholder='Enter an Email Address'
                                onChange={e => {
                                    setEmail(e.currentTarget.value)
                                }}/><br/><br/>
                            <p>Password</p>
                            <input 
                                type="text" 
                                id="password" 
                                placeholder='Enter a Password'
                                onChange={e => {
                                    setPassword(e.currentTarget.value)
                                }}/><br/><br/>
                            <Button variant="primary" onClick={e => handleSubmit(e)}>Submit</Button>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
    )
}

export default CreateAccount;