import { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';
import DepositWithdraw from "@/components/depositWithdraw";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { getUser } from "@/api";
import History from "../components/history"


function Home() {

    const [user, setUser] = useState({});
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        async function loadUserData() {
            const token = sessionStorage.getItem('User');
            const decodedUser = jwtDecode(token);
            let tempUser = await getUser(decodedUser._id);
            setUser(tempUser);
        }
        
        loadUserData();
    }, [])

    

    return(
        <>
            <DepositWithdraw />
            <History user={user} />
        </>

    )
}

export default Home;