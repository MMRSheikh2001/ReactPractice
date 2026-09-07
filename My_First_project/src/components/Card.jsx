

import { useState } from "react";
import "./Card.css"


export default function Card({ name, age, address }) {


    const [member, setMember] = useState("");

    let greetingText = "Hello";
    const clickHandler = (memberName) => {


        setMember(memberName);


    };
    
   



    return (
        <>
            {

                <div
                    onClick={() => clickHandler(name)}

                    className="card">

                    <h1>Card Components</h1>
                    <h2>Name : {name}</h2>
                    <h3>address : {address}</h3>
                    <h3>Age: {age}</h3>
                    <h4>{greetingText}</h4>
                    {member&& <h5>Greetings {member}</h5>}
                </div>


            }


        </>

    );
}