import { useEffect, } from "react";

function History(user) {
    useEffect(() => {

    }, []);

    return ( 
        <>
            {user.user.history?.map((balance, key) => {
                return (
                    <>
                        <h1 key={key}>{balance}</h1>
                    </>
                )
            })}
            {/* {JSON.stringify(user.user.history)} */}
        </>
    );
}

export default History;