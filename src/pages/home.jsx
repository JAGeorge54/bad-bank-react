import { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';

function Home() {

    const [user, setUser] = useState({});

    useEffect(() => {
        async function loadUserData() {
            const token = sessionStorage.getItem('User');
            const decodedUser = jwtDecode(token);
            setUser(decodedUser);
        }
        loadUserData();
    }, [])

    return(
        <>
            
            <label>Name:</label>
            <h2>{user.name}</h2>
            <label>Email:</label>
            <h2>{user.email}</h2>
            <label>Balance:</label>
            <h2>{user.balance}</h2>
        </>
    )
}

export default Home;