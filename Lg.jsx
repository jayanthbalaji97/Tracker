import {useNavigate } from "react-router-dom"
import style from "./home.module.css"
import { useState } from "react";
const Lg = ()=>{
    const [phone,setPhone] =useState("")
    const [otp,setOtp]= useState("")
    let handlePhone=(e)=>{
        setPhone(e.target.value)
    }
    let handleOtp = (e)=>{
        setPhone(e.target.value)
    }
    let navigate =useNavigate();
    let handleSubmit=(e)=>{
        navigate('/dr')

    }
    return(
        <div id={style.lg}>
            <label htmlFor="">Phone No:</label>
            <input type="number" name="" id="" />
            <label htmlFor="">OTP:</label>
            <input type="number" />
            <h1 id="head"></h1>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}
export default Lg