

import { useState } from "react";
import "./Card.css"


export default function Card({ name, age, address }) {


    const [member, setMember] = useState("Badrul");

    let greetingText = "Hello";
    const clickHandler = (memberName) => {


        console.log(greetingText + " " + memberName);


    };
    console.log(member);
    const anotherClickHandler = (memberName) => {
        console.log("Welcome Back", memberName);
    }
    const greetings = (name) => {
        clickHandler(name);
        anotherClickHandler(name);
    }

    return (
        <>
            {

                <div
                    onClick={() => greetings(props.name)}

                    className="card">

                    <h1>Card Components</h1>
                    <h2>Name : {name}</h2>
                    <h3>address : {address}</h3>
                    <h3>Age: {age}</h3>
                    <h4>{greetingText}</h4>
                </div>


            }


        </>

    );
}