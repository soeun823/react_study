import React, { useState } from'react';
export default function Hello(){
    // let name ="Mike";
    const [name, setName] = useState('Mike'); 

return( 
        <div>
            <h1 id="name">{name}</h1>
            <button onClick={ () => {
                setName(name === "Mike"? "Jane" : "Mike");
            }}>Change</button> 
        </div>
    )
}