import { useRef } from "react";

function FocusInput(){
    const inputRef = useRef(null)
    const handleclick = () => {
        inputRef.current.focus()
    }
    return(
        <div style={{padding:"20px" }}>
        <input type="text" ref={inputRef} placeholder="click the button for focus" style={{padding:"25px"}}></input>
        <button onClick={handleclick}> Focus</button>

        </div>
    )
}
export default FocusInput




