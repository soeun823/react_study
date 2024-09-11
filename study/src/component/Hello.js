import React, { useState } from'react';
import UserName from './UserName';
export default function Hello({ age }) {
    const [name, setName] = useState('Mike'); 
    const msg = age > 19 ? "성인 입니다" : "미성년자 입니다.";

return( 
        <div>
            <h1 id="name">
                {name}({age}) : {msg}
            </h1>
            <UserName name={name} />
            <button onClick={() => {
                setName(name === "Mike"? "Jane" : "Mike");
            }}>Change</button> 
        </div>
    )
}