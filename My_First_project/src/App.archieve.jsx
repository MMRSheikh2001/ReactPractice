
import './App.css'
import Card from './components/Card.arcieve'
import TestComponent from './TestComponent'

const members = [
  { name: "Mahbub", age: "23", address: "Dhaka" },
  { name: "Emon", age: "13", address: "Cumilla" },
  { name: "sabbir", age: "19", address: "Natore" },

];

function App() {


  return (

    <div>

      {/* <Card name={members[0].name} address={members[0].address} age={members[0].age} />
      <Card name={members[1].name} address={members[1].address} age={members[1].age}  /> */}

      {
        members
        .filter((member)=>member.age>18)
        .sort((a,b)=>a.age-b.age)
        .map((member) => (
          <Card name={member.name} age={member.age} address={member.address} />
        )
      )
      }

    </div>



  )
}

export default App
