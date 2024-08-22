import { useContext, useState, useEffect } from "react";
import { getUsers, getUser } from "../api";
import UserContext from '../context/UserContext';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function AllData() {
    const {users} = useContext(UserContext);
    const [allUsers, setAllUsers] = useState();
    let name = '';
    let email = '';
    let password = '';
    let balance = '';

    useEffect(() => {
        async function loadAllUsers () {
            let data = await getUsers();
            if (data) {
                setAllUsers(data)
            }

        }

        loadAllUsers();
    }, []);

    function Users () {
        let card = allUsers.map(account => {
            console.log(allUsers);
            name = account.name;
            email = account.email;
            password = account.password;
            balance = account.balance;
            return (
                <Card style={{ width: '18rem' }}>
                    <Card.Header>{name}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{email}</ListGroup.Item>
                        <ListGroup.Item>{password}</ListGroup.Item>
                        <ListGroup.Item>{balance}</ListGroup.Item>
                    </ListGroup>
                </Card>
            )
        })
        console.log(card);
        return card;
    }
        

    return(
        <>
            <h1>Users</h1>
            {JSON.stringify(allUsers)}
            {/* <Users/> */}
        </>
    )
}

export default AllData;