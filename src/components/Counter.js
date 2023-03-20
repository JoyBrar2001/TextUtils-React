import React, { useState } from "react";

export default function Counter(props) {

    const [count, setCount] = useState(() => {
        return 0;
    });

    const counter = () => {
        setCount(prevCount => prevCount+1);
    }

    return (
        <>
            <div className="containter">
                <h2>Counter</h2>
                <button className="btn btn-primary mx-4" onClick={counter}>Click here to see the count</button>
                <p>You have clicked {count} number(s) of times</p>
            </div>
        </>
    )
}