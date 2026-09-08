
import './Card.css';
import { use } from 'react';
import { CounterContext } from '../providers/counter.provider';





export default function NestedDisplay() {
    const {count,setCount}=use(CounterContext);

    return (<div className="card-orange">
        <p>Grand Child Component</p>

        <h1>{count}</h1>


    </div>
    )
}