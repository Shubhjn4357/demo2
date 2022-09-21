import "./custom-input.css";
import {useState} from "react";
const ContactUs=()=>{
  const [state,setState] =useState({
    name:"",
    email:"",
    num:"",
    msg:"",
  })
  const HandleState=(e)=>{
    setState({...state,[e.target.name]:e.target.value})
  }
  const submit=()=>{
    console.log(state)
  }
  const src="https://maps.google.com/maps?q=R.P.%20Alloys%20and%20Steel%20Forgings%20Private%20Limited&t=&z=13&ie=UTF8&iwloc=&output=embed";
  //const src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid";
  return <div className="contact">
  <div className="google-maps column">
          <h1 className="fs-large my-2">Get In Touch</h1>
          <p className="d-flex">
            <span className="material-icons text-error">
              place
             </span>
             <span>R.P. Alloys and Steel Forgings Private Limited</span>
           </p>
          <iframe title="maps"
              src={src}
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen={true}
              aria-hidden="false"
              tabIndex="0"
            />
    </div>
    <div className="contact-form card d-center column p-4">
    <div className="form-control my-2">
        <input type="text" id="name" onChange={HandleState} name="name" placeholder="Name" value={state.name} required />
        <label htmlFor="name">
          <span className="material-icons md-18">person</span>
          <span>Name</span>
        </label>
      </div>
    <div className="form-control my-2">
        <input type="email" onChange={HandleState} id="email" name="email" placeholder="Email" value={state.email} required />
        <label htmlFor="email">
          <span className="material-icons md-18">email</span>
          <span>Email</span>
        </label>
      </div>
    <div className="form-control my-2">
        <input type="number" onChange={HandleState} id="num" name="num" placeholder="Number" value={state.num} required />
        <label htmlFor="num">
          <span className="material-icons md-18">phone</span>
          <span>Number</span>
        </label>
      </div>
    <div className="form-control my-2">
        <textarea value={state.msg} onChange={HandleState} type="text" id="msg" name="msg" placeholder="Msg" required>
        <label htmlFor="msg">
          <span className="material-icons md-18">chat</span>
          <span>Message</span>
        </label>
        </textarea>
      </div>
      <button className="btn m-2 fs-2" onClick={submit}>
        Send <span className="material-icons md-18">chevron_right</span>
      </button>
    </div>
  </div>
}
export default ContactUs;




