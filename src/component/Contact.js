import React, { useContext, useState } from "react";
import "../css_component/contact.css";
import "../css_component/contact_responsive.css";
import { appcontext } from "../context/context";
import { HiMailOpen } from "react-icons/hi";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa"; 
import { RiSendPlaneFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Contact = () => {
  const { color, mode,burger } = useContext(appcontext); 
  const to="ajoun0176@gmail.com"
  const [formdata,setformdata]=useState({
      name:"",
      email:"",
      subject:"",
      description:"",
   }
  )
  const handleform=(e)=>{
      const { name, value } = e.target;
      setformdata((prevData) => ({
        ...prevData,
        [name]: value,
      }));

    
  }

   const submit = (e) => {
      e.preventDefault();
  
      const {name,email,subject,description } = formdata;
  
      // Create a mailto link with the form data
    if(name===""||email===""||subject===""){
        alert("Fill All Input Feild Required For Send Message")
    }
    else{
        const mailtoLink = `mailto:${to}?subject=Form Submission&body=
        Name: ${name}%0D%0A,
        User_email: ${email}%0D%0A,
        Your_subject: ${subject}%0D%0A,
        description: ${description}`;
  
      // Open the mail client with the mailto link
      window.location.href = mailtoLink;
    }
    };


  return (
    <div className="container">
      <div className="header">
        <h1 id={`${color}t`} style={mode?{}:{color:"#939393"}}>C O N T A C T</h1>
      </div>

      <div className="parent">
        <div
          className="item left"
          style={mode ? { color: "white" } : { color: "#626262" }}
        >
          <h2>DON'T BE SHY !</h2>
          <p>
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="icon_section">
            <div className="icon_item mail_icon">
              <Link   id={`${color}s`} to={""} ><HiMailOpen /></Link>
            </div>
            <div className="icon_item">
              <h4>MAIL ME</h4>
              <p>jounabbas.react.js@gmail.com</p>
            </div>
          </div>
          <div className="icon_section">
            <div className="icon_item mail_icon" id={`${color}s`}>
                <Link to={""} id={`${color}s`}>   <FaPhoneSquareAlt /></Link>
            </div>
            <div className="icon_item">
              <h4>CALL ME</h4>
              <p>+92 315 3357 007</p>
            </div>
          </div>

          <div className="footer_icon">
            <Link target="_blank" to={"https://www.facebook.com/john.abbas.5473?mibextid=JRoKGi"}>
              <span id={`${color}h`} >
                <GrFacebookOption />
              </span>
            </Link>

            <Link to={""}>
              <span id={`${color}h`}>
                <FaTwitter />
              </span>
            </Link>
            <Link target="_blank" to={"https://github.com/Jounabbas?tab=repositories"}>  
              <span id={`${color}h`}>
                <FaGithub />
              </span>
            </Link>
          <Link target="_blank" to={"https://www.linkedin.com/in/joun-abbas-05b285261"}>
              <span id={`${color}h`}>
                <FaLinkedin />
              </span>
          </Link>
          </div>
        </div>

        <div className="item right" >
          <div className="form_parent">
            <div className="form_item">
              <input
                type="text"
                name="name"
                value={formdata.name}
                onChange={handleform}
                placeholder=" YOUR NAME"
                style={mode ? {} : { background: "white", color: "#626262" }}
              />
            </div>
            <div className="form_item">
              <input
                type="text"
                name="email"
                  value={formdata.email}
                onChange={handleform}
                placeholder="YOUR EMAIL"
                style={mode ? {} : { background: "white", color: "#626262" }}
              />
            </div>
            <div className="form_item">
              <input
                type="text"
                name="subject"
                  value={formdata.subject}
                onChange={handleform}
                placeholder="YOUR OBJECT"
                style={mode ? {} : { background: "white", color: "#626262" }}
              />
            </div>
          </div>

          <div className="text_area">
            <textarea
            onChange={handleform}
            name="description"
              value={formdata.description}
              rows="6"
              placeholder="YOUR MESSAGE"
              style={mode ? {} : { background: "white", color: "#626262" }}
            ></textarea>
          </div>
          <div className="home_sec6" id="btn">
            <button id={`${color}b`} style={burger?{zIndex:"1"}:{ transition: "all 0s ease-in-out"}} onClick={submit}>
              <span
                className="text"
                style={mode ? { color: "white" } : { color: "#626262" }}
              >
                SEND MESSAGE
              </span>{" "}
              <span
                className="span"
                id={color}
                style={mode ? { color: "white" } : { color: "white" }}
              >
                <RiSendPlaneFill className="ico" />
              </span>{" "}
              <span className="hover_effect" id={color}></span>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
