import './Card.css';
import NestedDisplay from './NestedDisplay';

export default function Display({ count }) {

    return <div className='card-blue'>

        <p>Child Component</p>
        <NestedDisplay count={count} />


    </div>
}