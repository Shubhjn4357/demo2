import image1 from "../assets/i4.png"
const Heading=()=>{
  return <div className=" heading">
    <div className="d-flex">
    <div className="relative">
      <img className="image-fit head-img" src={image1} alt="head-img"/>
      <div className="img-mask"></div>
    </div>
      <span className="absolute head1 text-light">Best Machine And <br/> Casting Solution</span>
      <span className="absolute head2 text-light text-nowrap p-2">Minning/Minneral processing Rubber</span>
    </div>
  </div>
}
export default Heading;