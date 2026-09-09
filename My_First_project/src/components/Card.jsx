

import { useState } from "react";
import "./Card.css"


export default function Card({ name, email }) {


    const [member, setMember] = useState("");


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
                    <h3>Email : {email}</h3>



                </div>


            }


        </>

    );
}