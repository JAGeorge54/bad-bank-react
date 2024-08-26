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
        <div className="w-1/3">
            <h2 className="flex left-0 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">{`Name: ${user.name}`}</h2>
            <h2 className="flex left-0 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">{`Email: ${user.email}`}</h2>
            <h2 className="flex left-0 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">{`Balance: ${user.balance}`}</h2>
        </div>
    )
}

export default Home;