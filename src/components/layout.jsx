import NavBar from './navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Layout() {

    let user = sessionStorage.getItem("User");
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user]);

    return ( 
        <>
            <NavBar />
            <Outlet />
        </>
     );
}

export default Layout;