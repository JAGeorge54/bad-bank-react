import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';
import { getUser } from "@/api";
import { updateUser } from "@/api";

function DepositWithdraw() {

    const [amount, setAmount] = useState(0);
    const [deposit, setDeposit] = useState(true);
    const [radio, setRadio] = useState('');
    const [user, setUser] = useState({});

    useEffect(() => {
        async function loadUserData() {
            const token = sessionStorage.getItem('User');
            const decodedUser = jwtDecode(token);
            let tempUser = await getUser(decodedUser._id);
            setUser(tempUser);
        }
        if (radio === 'withdraw') {
            setDeposit(false)
        } else {
            setDeposit(true);
        }
        loadUserData();
    }, [radio, user])

    async function handleSubmit() {
        event.preventDefault();
        if (deposit) {
        let newBalance = amount + user.balance;
        let tempUser = user;
        tempUser.balance = newBalance;
        console.log(tempUser);
        let updatedUser = await updateUser(tempUser._id, tempUser);
        setUser(updatedUser);
        document.getElementById('input').value='';
        setAmount(0);
        } else {
            let newBalance = user.balance - amount;
            let tempUser = user;
            tempUser.balance = newBalance;
            console.log(tempUser);
            let updatedUser = await updateUser(tempUser._id, tempUser);
            setUser(updatedUser);
            document.getElementById('input').value='';
            setAmount(0);
        }

    }

    return (
        <>
            <div className="flex flex-row gap-10 justify-center ">
                <h2 className="flex justify-center scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">{`Name: ${user.name}`}</h2>
                <h2 className="flex justify-center scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">{`Email: ${user.email}`}</h2>
                <h2 className="flex justify-center scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">{`Balance: ${user.balance}`}</h2>
            </div> 
            <div className="flex justify-center">
                <div className="flex flex-col justify-center m-20 border-solid border-2 rounded-lg w-3/5">
                    <div className="flex justify-center p-2">
                        <div className={`border-solid border-2 rounded-lg w-1/4 ${deposit ? 'bg-green-500' : 'bg-red-500'}`}>
                            {deposit ? 
                            <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Deposit</h1>
                            : <h1 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Withdraw</h1>
                            }
                        </div>
                    </div>
                    <form className="flex justify-center" onSubmit={handleSubmit}>
                        <Input id='input' placeholder={'Amount'} name='amount' className='mb-2 w-1/3' onChange={e=>setAmount(Number(e.target.value))}/>
                        <div className="pb-2 px-2">
                            <fieldset>
                                <div className="flex flex-col">
                                    <div className="flex flex-row">
                                        <input type="radio" id="deposit" name="transactionType" value="deposit" defaultChecked onChange={e=>setRadio(e.target.value)}/>
                                        <label>Deposit</label>
                                    </div>
                                    <div className="flex flex-row">
                                        <input type="radio" id="withdraw" name="transactionType" value="withdraw" onChange={e=>setRadio(e.target.value)}/>
                                        <label>Withdraw</label>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <Button type='submit' className={`mb-2 ${deposit ? 'bg-green-500 hover:bg-green-700' : 'bg-red-500 hover:bg-red-700'} `}>Submit</Button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default DepositWithdraw;