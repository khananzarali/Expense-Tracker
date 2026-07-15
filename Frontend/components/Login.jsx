import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"

function Login(){
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const handlesumbit=async(e)=>{
       e.preventDefault();
       try {
        await axios.post("https",{
            username,
            password
        })
        localStorage.setItem("loggedInItem","true")
        Navigate("/home")
       } catch (error) {
        
       }

    }
    return(
        <>
        <form type="submit">
            <input type="text" value={username} onChange={(e)=>setusername(e.traget.value)}/>
            <input type="password" value={password} onChange={(e)=>setpassword(e.traget.value)}/>
            <button type="submit" >Submit</button>
        </form>
        </>
    )
}
export default Login