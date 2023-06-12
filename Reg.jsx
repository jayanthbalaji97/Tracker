import { useState } from "react";
import style from "./home.module.css"
import { useNavigate } from "react-router-dom"

const Reg=()=>{
    const [name,setName]=useState("")
const [phone,setPhone]=useState("")
let handleName=(e)=>{
    setName(e.target.value)
}
let handlePhone=(e)=>{
    setPhone(e.target.value)
}
let navigate=useNavigate();
    let handleSubmit=(e)=>{
      navigate('/lg')
    }
    return(
        <div id={style.reg}>
           <label htmlFor="" onChange={handleName}>Name:</label>
            <input type="text"/>
            <label htmlFor="" onChange={handlePhone}>Phone No:</label>
            <input type="number"/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Reg