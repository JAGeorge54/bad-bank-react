import React, { useState } from 'react'

import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
    const [users, setUsers] = useState([
        {
            'name': 'peter',
            'email': 'peter@mit.edu',
            'password': 'secret',
            'balance': 100
        }
    ]);
    return (
        <UserContext.Provider value={{users, setUsers}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;