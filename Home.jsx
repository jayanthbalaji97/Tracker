import { Link } from "react-router-dom"
import style from "./home.module.css"
const Home = ()=>{
    return(
      <div>
        <div id={style.home}>
         <Link to={"/reg"}>Register</Link>
         <Link to={"/lg"}>Login</Link>
        </div>
        </div>
    )
}
export default Home