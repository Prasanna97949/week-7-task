import { useState } from "react"

function Counter()
{
    var[count,setcount] = useState(0)
    function inc(){
        setcount(count+1)
    }
    function dec(){
        setcount(count-1)
    }
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={inc}>Increment</button>
            <button onClick={dec}>Decrement</button>
        </div>
    )
}
export default Counter