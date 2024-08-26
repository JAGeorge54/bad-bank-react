import { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function Home() {

    const [user, setUser] = useState({});
    const [deposit, setDeposit] = useState(true);

    useEffect(() => {
        async function loadUserData() {
            const token = sessionStorage.getItem('User');
            const decodedUser = jwtDecode(token);
            setUser(decodedUser);
        }
        loadUserData();
    }, [])

    return(
        <>
            <div className="flex flex-row gap-10 justify-center ">
                <h2 className="flex justify-center scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">{`Name: ${user.name}`}</h2>
                <h2 className="flex justify-center scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">{`Email: ${user.email}`}</h2>
                <h2 className="flex justify-center scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">{`Balance: ${user.balance}`}</h2>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col justify-center m-20 border-solid border-2 rounded-lg w-3/5">
                    <div>
                        {deposit ? 
                        <h1>Deposit</h1>
                        : <h1>Withdraw</h1>
                        }
                    </div>
                    <form className="flex justify-center">
                        <Input placeholder={'Amount'} name='amount' className='mb-2 w-1/3'/>
                        <Button type='submit' className='mb-4'>Submit</Button>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Home;