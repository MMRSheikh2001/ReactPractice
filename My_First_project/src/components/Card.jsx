import "./Card.css"










// export default function Card(props) {

//     console.log(props);
//     if (props.age >= 18) {
//         return <div className="card">

//             <h1>
//                 You are Old enough to drive
//             </h1>

//         </div>
//     }
//     return <div className="card">

//         <h1>Card Components</h1>
//         <h2>Name : {props.name}</h2>
//         <h3>address : {props.address}</h3>
//         <h3>Age: {props.age}</h3>
//     </div>
// }

// export default function Card(props) {

//     console.log(props);

//     return (
//         <>
//             {
//                 props.age >= 18 && (
//                     <div className="card">

//                         <h1>Card Components</h1>
//                         <h2>Name : {props.name}</h2>
//                         <h3>address : {props.address}</h3>
//                         <h3>Age: {props.age}</h3>
//                     </div>
//                 )

//             }
//             {
//                 props.age < 18 && (
//                     <div className="card">

//                         <h1>Card Components</h1>
//                         <h2>Name : {props.name}</h2>
//                         <h3>address : {props.address}</h3>
//                         <h3>Age: {props.age}</h3>
//                         <h1>You are too Young</h1>
//                     </div>
//                 )

//             }

//         </>

//     );
// }



export default function Card(props) {

    console.log(props);

    return (
        <>
            {
                props.age >= 18 ? (
                    <div className="card">

                        <h1>Card Components</h1>
                        <h2>Name : {props.name}</h2>
                        <h3>address : {props.address}</h3>
                        <h3>Age: {props.age}</h3>
                    </div>
                ) : (
                    <div className="card">

                        <h1>Card Components</h1>
                        <h2>Name : {props.name}</h2>
                        <h3>address : {props.address}</h3>
                        <h3>Age: {props.age}</h3>
                        <h1>You are too Young</h1>
                    </div>
                )

            }
           

        </>

    );
}