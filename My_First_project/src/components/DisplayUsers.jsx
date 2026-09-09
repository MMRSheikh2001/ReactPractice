import { useEffect, useState } from "react";
import Card from "./Card";


export default function DisplayUsers() {

    const [data, setData] = useState([]);
    const [loading, setIsLoading] = useState(true);
    const [error, setError] = useState("");


    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((res) => {
    //             if (!res.ok) {
    //                 throw new Error("Something went weong");
    //             }
    //             return res.json();
    //         }).then((data) => setData(data))
    //         .catch((err) => setError(err.message))
    //         .finally(() => {
    //             setIsLoading(false);
    //         })
    // }, []);


    useEffect(() => {

        const fetchUsers = async () => {

            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!res.ok) {
                    throw new Error("Something went weong");
                }
                const data = await res.json();
                setData(data);

            } catch (err) {
                setError(err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchUsers();
    }, [])





    if (loading) {
        return (<p>Is Loading....</p>)
    }
    if (error) {
        return (<p>{error}</p>)
    }

    console.log(data);
    return (

        <div>
            {data.map(
                (user) => (
                    <Card name={user.name} email={user.email}></Card>
                )
            )}
        </div>
    );

}