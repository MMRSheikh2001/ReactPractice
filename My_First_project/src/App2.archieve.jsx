
import { useState } from 'react';
import './App.css'
import Card from './components/Card';
import Counter from './components/Counter';


// const members = [
//     { name: "Mahbub", age: "23", address: "Dhaka" },
//     { name: "Emon", age: "13", address: "Cumilla" },
//     { name: "sabbir", age: "19", address: "Natore" },

// ];

function App() {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [address, setAddress] = useState("");

    const [members, setMembers] = useState([
        { name: "Mahbub", age: "23", address: "Dhaka" },
        { name: "Emon", age: "13", address: "Cumilla" },
        { name: "sabbir", age: "19", address: "Natore" },

    ]);


    const handleSubmit = (e) => {

        e.preventDefault();

        // setMembers([...members,{ name, age, address }]);
        setMembers((prev) => [...prev, { name, age, address }])

        console.log(members);

        setName("");
        setAge(0)
        setAddress("");



    }


    return (

        <div>
            <form onSubmit={(e) => handleSubmit(e)}>

                <label htmlFor="">Name</label>
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} /><br />

                <label htmlFor="">Age</label>
                <input type="number" onChange={(e) => setAge(e.target.value)} value={age} /><br />

                <label htmlFor="">Address</label>
                <input type="text" onChange={(e) => setAddress(e.target.value)} value={address} /><br />
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
