import React, {useState} from "react";


function Button({emoji, votes}) {


const [count, setCount] = useState(0)
function counter() {
    setCount(count + 1)
}

    return (
        <>
        <button onClick={counter}>{votes + count}{emoji}</button>
        </>
    )
}

export default Button