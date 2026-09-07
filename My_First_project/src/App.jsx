
import './App.css'
import Card from './components/Card';


const members = [
    { name: "Mahbub", age: "23", address: "Dhaka" },
    { name: "Emon", age: "13", address: "Cumilla" },
    { name: "sabbir", age: "19", address: "Natore" },

];

function App() {


    return (

        <div>


            {
                members
                    .map((member) => (
                        <Card name={member.name} age={member.age} address={member.address} />
                    )
                    )
            }

        </div>



    )
}

export default App
