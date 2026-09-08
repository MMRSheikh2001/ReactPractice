
import { useState } from 'react';
import './App.css'
import Counter from './components/Counter';
import Display from './components/Display.jsx';


// const members = [
//     { name: "Mahbub", age: "23", address: "Dhaka" },
//     { name: "Emon", age: "13", address: "Cumilla" },
//     { name: "sabbir", age: "19", address: "Natore" },

// ];

function App() {

  const [count, setCount] = useState(0);

    return (

        <div>
          

            <Counter count={count} setCount={setCount} />
            <Display count={count} />

        </div>



    )
}

export default App
