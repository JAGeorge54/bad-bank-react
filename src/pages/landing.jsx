import CreateAccount from "../components/createaccount";
import Login from "../components/login";
import { useState } from "react";

function Landing() {

    //view == true  --> Login
    //view == false --> Create
    const [ view, setView ] = useState(true);

    return ( 
        <>
            {!view ?
            <>
                <CreateAccount />
                <button onClick={() => setView(!view)}>Login</button>
            </> :
            <>
                <Login />
                <button onClick={() => setView(!view)}>Create New Account</button>
            </>}
        </>
     );
}

export default Landing;