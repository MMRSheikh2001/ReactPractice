import { useState } from "react";




export default function Counter() {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } else{
            alert("You can't count in Negative");
        }
    }

    const reset = () => {
        setCount(0);
    }


    return (
        <div>

            <button onClick={handleIncrement}> Increment</button><br />

            <h1>{count}</h1>
            <br />
            <button onClick={handleDecrement}>Decrement</button>

            <br />
            <hr />
            <button onClick={reset}>Reset</button>

        </div>
    );
}