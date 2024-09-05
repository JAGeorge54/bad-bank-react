import { useEffect, useState } from "react";

function History(user) {    

    return ( 
        <div className="flex justify-center">
            <div className="border-solid border-2 rounded-lg w-1/3">History
                {user.user.history?.map((balance, key) => {
                    return (
                        <h1 key={key}>{`${key}: ${balance}`}</h1>
                    )
                })}
            </div>
        </div>
    );
}

export default History;