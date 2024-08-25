import CreateAccount from "../components/createaccount";
import Login from "../components/login";
import { useState } from "react";

function Landing() {

    //view == true  --> Login
    //view == false --> Create
    const [ view, setView ] = useState(true);

    return ( 
        <div className="flex justify-center items-center w-screen h-screen">
            {!view ?
            <div className="flex flex-col w-96">
                <CreateAccount />
                <button onClick={() => setView(!view)}>Login</button>
            </div> :
            <div className="flex flex-col w-96">
                <Login />
                <button onClick={() => setView(!view)}>Create New Account</button>
            </div>}
        </div>
    );
}

export default Landing;