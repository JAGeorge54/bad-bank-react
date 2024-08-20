import { useContext } from "react";
import UserContext from '../context/UserContext';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function AllData() {
    const {users} = useContext(UserContext);
    let name = '';
    let email = '';
    let password = '';
    let balance = '';

    function Users () {
       let card = users.map(account => {
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
        return card;
    }
        

    return(
        <>
            <h1>Users</h1>
            <Users/>
        </>
    )
}

export default AllData;