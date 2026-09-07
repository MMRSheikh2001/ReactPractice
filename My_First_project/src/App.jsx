
import { useState } from 'react';
import './App.css'
import Card from './components/Card';
import Counter from './components/Counter';


const members = [
    { name: "Mahbub", age: "23", address: "Dhaka" },
    { name: "Emon", age: "13", address: "Cumilla" },
    { name: "sabbir", age: "19", address: "Natore" },

];

function App() {

    const [name,setName]=useState("");


    const handleSubmit = (e) => {
      
        e.preventDefault();
        console.log(name);



    }


    return (

        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>

                <input type="text" onChange={(e)=>setName(e.target.value)}/><br />
                <button type='submit'>Submit</button>

            </form>


            {
                members
                    .map((member) => (
                        <Card name={member.name} age={member.age} address={member.address} />
                    )
                    )
            }

            {/* <Counter></Counter> */}

        </div>



    )
}

export default App
