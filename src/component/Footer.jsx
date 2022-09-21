const Footer=()=>{
  return (
    <div className="p-2 d-center bg-dark justify-around">
      <div className="d-block text-start">
        <div className="text-light my-1">About Us</div>
        <div className="text-light my-1">Contact Us</div>
        <div className="text-light my-1">Infrastructure</div>
      </div>
      <div className="d-block">
        <p className="text-light text-start px-2 h4">Industry</p>
        <div className="d-flex">
        <div className="fs-2 text-start">
          <li className="text-light my-1">Cement</li>
          <li className="text-light my-1">Mining Processing</li>
          <li className="text-light my-1">Rubber</li>
       </div>
        <div className="fs-2 mx-4 text-start">
          <li className="text-light my-1">Sugger</li>
          <li className="text-light my-1">Fertilizer</li>
          <li className="text-light my-1">Power</li>
       </div>
       </div>
      </div>
      <div className="d-flex column text-end">
        <div className="icons d-flex justify-end">
          <div className="material-icons md-18 text-light">flutter_dash</div>
          <div className="material-icons md-18 text-light mx-1">ondemand_video</div>
          <div className="material-icons md-18 text-light">linked_camera</div>
        </div>
        <div className="text-light fs-2 my-1">2022® RP Alloys & Steel Forging</div>
        <div className="text-light fs-3">Design Credit:: Shubh Jain</div>
      </div>
    </div>
    )
}
export default Footer;