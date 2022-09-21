import i3 from "../assets/i3.png";
import i5 from "../assets/i5.png";
import i6 from "../assets/i6.png";
const Slider=()=>{
  const data=[
    {
      img:i3,
      text:"Rubber Industry",
      subtext:"Neque porro quisquam est qui dolorem , consectetur, adipisci velit...",
    },
    {
      img:i5,
      text:"Mining Processing",
      subtext: "Neque porro quisquam est qui dolorem, consectetur, adipisci velit...",
    },
    {
      img:i6,
      text:"Cement Industry",
      subtext:"Neque porro quisquam est qui dolorem , consectetur, adipisci velit...",
    },
    {
      img:i3,
      text:"Rubber Industry",
      subtext:"Neque porro quisquam est qui dolorem, consectetur, adipisci velit...",
    },
    {
      img:i5,
      text:"Mining Processing",
      subtext: "Neque porro quisquam est qui dolorem, consectetur, adipisci velit...",
    },
    ]
  return (<><div className="slider-box">
       <div className="text-error text-start fs-4 px-4">Customer First Approach</div>
      <div className="text-start h1 px-4">First Choice Of Procurement<br/> Partners Across Global</div>

    <div className="slider py-2">
     <div className="slider-wrapper p-2">
      {data.map((i,k)=>{
        return <div key={k} className="slider-container">
          <img className="slider-img image-fit" src={i.img} alt="sliderimage"/>
          <span className="slider-anim"></span>
          <span className="slider-text text-light h2">{i.text}</span>
          <span className="slider-subtext text-wrap px-4 text-start text-light h5">{i.subtext}</span>
        </div>
      })}
      </div>
    </div>
    </div>
  </>)
}
export default Slider;