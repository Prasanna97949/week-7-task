import { useState } from "react"

function Random()
{
    var[count,setcount] = useState(0)
    function random(){
        setcount(Math.round(Math.random()*10))
    }
    
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={random}>Random Number</button>
        </div>
    )

}
export default Random