import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import style from "./home.module.css"

const Customer = ()=>{
    const [name,setName]=useState("")
    const [phone,setPhone]=useState("")
    const [lat,setLat]=useState("")
    const [lng,setLng]=useState("")
    let navigate = useNavigate();
    let  handleName=(e)=>{
        setName(e.target.value)
    }
    let handlePhone=(e)=>{
        setPhone(e.target.value)
    }
    let handleLat=(e)=>{
        setLat(e.target.value)
    }
    let handleLng=(e)=>{
        setLng(e.target.value)
    }
    let handleAdd=(e)=>{
        navigate('/dr')
        
    }
    return(
        <div id={style.cus}>
             <label htmlFor="">Name:</label>
             <input type="text" />
             <label htmlFor="">Phone No:</label>
             <input type="number" />
             <label htmlFor="">Latitude</label>
             <input type="text" />
             <label htmlFor="">Longitude</label>
             <input type="text" />
             <button onClick={handleAdd}>Add</button>
        </div>
    )
}
export default Customer