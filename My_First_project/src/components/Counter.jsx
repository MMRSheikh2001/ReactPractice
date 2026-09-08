
import "./Card.css";
import { CounterContext } from "../providers/counter.provider";
import { use } from "react";




export default function Counter() {
const {count,setCount}=use(CounterContext);
  

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
        <div className="card">

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