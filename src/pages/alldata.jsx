import { useContext, useState, useEffect } from "react";
import { getUsers, getUser } from "../api";
import UserContext from '../context/UserContext';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function AllData() {
    const {users} = useContext(UserContext);
    const [allUsers, setAllUsers] = useState();

    useEffect(() => {
        async function loadAllUsers () {
            let data = await getUsers();
            if (data) {
                setAllUsers(data)
            }

        }

        loadAllUsers();
    }, []);

    return(
        <>
            <h1>User</h1>
            {JSON.stringify(allUsers)}
        </>
    )
}

export default AllData;