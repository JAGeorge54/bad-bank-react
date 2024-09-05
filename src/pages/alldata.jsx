import { useContext, useState, useEffect } from "react";
import { getUsers, getUser } from "../api";
import { jwtDecode } from 'jwt-decode';
import UserContext from '../context/UserContext';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function AllData() {
    // const {users} = useContext(UserContext);
    const [user, setUser] = useState({});
    const [allUsers, setAllUsers] = useState([]);

    useEffect(() => {
        async function loadAllUsers () {
            const token = sessionStorage.getItem('User');
            const decodedUser = jwtDecode(token);
            let tempUser = await getUser(decodedUser._id);
            setUser(tempUser);
            if(tempUser.admin == true) {
                let data = await getUsers();
                if (data) {
                    setAllUsers(data)
                }
            }
        }

        loadAllUsers();
    }, []);

    return(
        <>
            <h1>User</h1>
            {user.admin ? JSON.stringify(allUsers) : JSON.stringify(user)}
        </>
    )
}

export default AllData;