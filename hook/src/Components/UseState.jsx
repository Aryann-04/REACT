import React, { useState } from 'react'

export default function UseState() {
    const [count, setCount] = useState(0);
    const [name, setname] = useState("");
    const updateCount = () => {
        setCount(count + 10)
        setname("AZ")
    }
    return (
        <div>
            <h1>UseState</h1>
            <h1>{count}</h1>
            <h1>{name}</h1>
           <button onClick={updateCount}>UPDATE COUNT </button>
        </div>
    );
}
