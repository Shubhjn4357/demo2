import image1 from "../assets/i1.png"
const Desk=()=>{
  const desk=[
    {
      icon:"apartment",
      num:"10,000ft^2",
      text:"Factory Area",
    },
    {
      icon:"factory",
      num:"30+",
      text:"Factory we Have",
    },
    {
      icon:"groups",
      num:"2000+",
      text:"Worker we Have",
    },
    ]
  return (<>
  <div className="desp my-2">
    <div className="d-flex">
    <div className="relative">
      <img className="image-fit desp-img" src={image1} alt="desp-img"/>
      <div className="img-mask"></div>
    </div>
    <div className="desp-data column d-flex">
      <div className="text-light text-start fs-3 px-3">Customer First Approach</div>
      <span className="h1 text-light text-start px-3 my-2">World Class <br/>Machine & Infra</span>
      <span className="text-wrap px-4 text-start text-light h5">"Neque porro quisquam est qui dolorem, consectetur, adipisci velit...<br/>"Neque porro quisquam est qui dolorem</span>
      <div className="d-center w-full my-2">
      {desk.map((i,k)=>{
         return <span key={k} className="text-center text-light p-2">
            <span className="material-icons desp-icon md-48 text-light">{i.icon}</span>
            <h1 className="h2">{i.num}</h1>
            <p className="h4">{i.text}</p>
          </span>
      })}
      </div>
     </div>
    </div>
  </div>
  </>)
}
export default Desk