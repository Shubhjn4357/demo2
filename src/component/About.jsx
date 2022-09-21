const About=()=>{
  const feature=[
    {
      num:20,
      text:"Location WorldWide",
    },
    {
      num:23,
      text:"Years of Experience",
    },
    {
      num:50,
      text:"Global Happy Clients",
    },
    ]
  return (
    <div className="about">
      <div className="d-flex column px-4">
        <div className="text-error text-start fs-2">smart wroking from</div>
        <div className="h1 text-start h2">Some of The Best Of <br/> Industry Exspanerts</div>
        <div className="text-end">
          <span className="text-wrap m-auto fs-2">Lorem ispansum dolor sit amet,<br/> consectetur adispaniscing elit.<br/> Sed non lacus rhoncus nulla temspanus mollis vitae eget nisl. <br/> Nulla ultricies feugiat iaculis. <br/>Sed in euismod velit.</span>
        </div>
        <div className="d-center w-full feature">
        {feature.map((i,k)=>{
         return <span key={k} className="text-center feature-child">
            <h1 className="fs-large">{i.num}<span className="text-error">+</span></h1>
            <p className="h4">{i.text}</p>
          </span>
        })}
        </div>
      </div>
    </div>
    )
}
export default About;