import {Routes,Route} from "react-router-dom";
import Home from "./component/Home";
const Router=()=>{
  return( <>
  <Routes>
    <Route path="/demo2" element={<Home/>}/>
  </Routes>
</>)
}
export default Router;