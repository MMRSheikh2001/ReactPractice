

import { useEffect, useState } from 'react'
import './App.css'




function App() {

    const [count, setCount] = useState(0);
    const [anotherCount, setAnotherCount] = useState(0);
    useEffect(() => {
        console.log("Count : ", count);
        console.log("Another Count", anotherCount);
    }, [count, anotherCount]);



    return (

        <div>

            <h1>
                Hello World
            </h1>

            <button onClick={() => setCount(count + 1)}>{count}</button><br />
            <button onClick={() => setAnotherCount(anotherCount + 1)}>{anotherCount}</button><br />


        </div>



    )
}

export default App
