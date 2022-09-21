import {Link} from "react-router-dom";
import {useState} from "react";
const Navbar=()=>{
  const[State,setState] =useState(false);
  return <div className="nav">
  <div className="navbar py-2" >
    <span onClick={()=>setState(!State)} className="material-icons">
    sort
    </span>
    <span className="h-4">
    RP Alloys
    </span>
    <Link className="btn">
        GetInTouch 
        <span className="material-icons">
          arrow_forward
        </span>
    </Link>
  </div>
  <div className={`${State?"show":"hide"} column justify-around`}>
    <Link className="btn w-full" to="/demo2">Home</Link>
    <a className="btn w-full" href="https://github.com/Shubhjn4357/">About Me</a>
  </div>
  </div>
}
export default Navbar;