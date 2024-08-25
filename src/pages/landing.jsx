import CreateAccount from "../components/createaccount";
import Login from "../components/login";
import { useState } from "react";
import { Button } from "@/components/ui/button"

function Landing() {

    //view == true  --> Login
    //view == false --> Create
    const [ view, setView ] = useState(true);

    return ( 
        <div className="flex justify-center items-center w-screen h-screen">
            {!view ?
            <div className="flex flex-col w-96">
                <CreateAccount />
                <Button onClick={() => setView(!view)}>Already have an account? Login</Button>
            </div> :
            <div className="flex flex-col w-96">
                <Login />
                <Button onClick={() => setView(!view)}>Create New Account</Button>
            </div>}
        </div>
    );
}

export default Landing;