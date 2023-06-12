import Home from "./Components/Home"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Reg from "./Components/Reg"
import Lg from "./Components/Lg"
import Driver from "./Components/Driver"
import Customer from "./Components/Customer"

const location = {
  address: '1600 Amphitheatre Parkway, Mountain View, california.',
  lat: 37.42216,
  lng: -122.08427,
}
const App =()=>{
  return(
    <div>
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route path="/reg" element={<Reg/>} />
        <Route path="/lg" element={<Lg/>} />
        <Route path="/dr" element= {<Driver location={{ lat: 123, lng: 456}} zoomLevel={10}/>}/>
        <Route path="/cus" element={<Customer/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}
export default App