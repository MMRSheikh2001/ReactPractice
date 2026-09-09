

import { useEffect, useState } from 'react'
import './App.css'




function App() {
    const [second, setSecond] = useState(0);


    useEffect(() => {
        const timerId = setInterval(() => {
            setSecond((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, []);



    return (

        <div>

            <h1>
                {second}
            </h1>




        </div>



    )
}

export default App
