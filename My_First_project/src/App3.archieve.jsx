

import './App.css'
import Counter from './components/Counter';
import Display from './components/Display.jsx';
import CounterProvider from './providers/counter.provider.jsx';


// const members = [
//     { name: "Mahbub", age: "23", address: "Dhaka" },
//     { name: "Emon", age: "13", address: "Cumilla" },
//     { name: "sabbir", age: "19", address: "Natore" },

// ];

function App() {

    

    return (

        <CounterProvider>

            <p>Parent Component</p>

            <Counter />
            <Display />

        </CounterProvider>



    )
}

export default App
