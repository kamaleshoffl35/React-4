import { useRef } from "react";
import { useState } from "react";

function Stopwatch(){
    const [time,setTime] = useState(0)
    const inputRef = useRef(null)
    const start = () =>{
        if(inputRef.current!==null){
            return
        }
        inputRef.current = setInterval(()=>{
            setTime((prev)=>prev+1)
        },1000)
    }
    const stop = () =>{
        clearInterval(inputRef.current)
        inputRef.current = null
    }
    const reset = () =>{
        stop()
        setTime(0)
    }
    return(
        <div>
            <h1>Stopwatch Application</h1>
            {time}
            <button onClick={start}>start</button>
            <button onClick={stop}>stop</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
export default Stopwatch