import React, { useContext } from "react";
import "../css_component/about.css";
import { appcontext } from "../context/context";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";



const About = () => {
  const { color, mode } = useContext(appcontext);
  return (
    <div className="container2">
      <div className="header about_header">
        <h1 id={`${color}t`} style={mode?{}:{color:"#939393"}}>A B O U T - M E </h1>
      </div>

      <div className="about_sec1">
        <div className="about_item1">
          <div className="about_me">
            <p>
              First Name :{" "}
              <span style={mode ? { color: "white" } : { color: "#626262" }}>
                Joun
              </span>
            </p>
            <p>
              Last Name :{" "}
              <span style={mode ? { color: "white" } : { color: "#626262" }}>
                Abbas
              </span>
            </p>
            <p>
              Age :{" "}
              <span style={mode ? { color: "white" } : { color: "#626262" }}>
                18
              </span>
            </p>
            <p>
              Nationality :{" "}
              <span style={mode ? { color: "white" } : { color: "#626262" }}>
                Pakistan
              </span>
            </p>
            <p>
              Freelance :{" "}
              <span style={mode ? { color: "white" } : { color: "#626262" }}>
                Available
              </span>
            </p>
          </div>

          <div className="about_me">
            <p>
              Address :{" "}
              <span style={mode ? { color: "white" } : { color: "#626262" }}>
                Jamman Shah
              </span>
            </p>
            <p>
              Email :{" "}
              <span style={mode ? { color: "white" } : { color: "#626262" }}>
                jounabbas@react.js@gmail.com
              </span>
            </p>
            <p>
              Phone :{" "}
              <span style={mode ? { color: "white" } : { color: "#626262" }}>
                +92 315 3357007
              </span>
            </p>
            <p>
              Religion :{" "}
              <span style={mode ? { color: "white" } : { color: "#626262" }}>
                Islam
              </span>
            </p>
            <p>
              Langages :{" "}
              <span style={mode ? { color: "white" } : { color: "#626262" }}>
                Urdu , English
              </span>
            </p>
          </div>

          <div className="home_sec6 about_btn" id="btn">
            <button id={`${color}b`}>
              <span
                className="text" id={`${color}btn`}
                style={mode ? { color: "white" } : { color: "#626262" }}
              >
                SEND MESSAGE
              </span>{" "}
              <span
                className="span"
                id={color}
                style={mode ? { color: "white" } : { color: "white" }}
              >
                <FaCloudDownloadAlt className="ico" />
              </span>{" "}
              <span className="hover_effect" id={color}></span>{" "}
            </button>
          </div>
        </div>
        
        <div className="about_item2">
          <div className="experience">
            <h1 id={`${color}s`}>3+</h1>
            <p style={mode?{color:'white'}:{color:"#626262"}}>YEARS OF EXPERIENCE</p>
          </div>
          <div className="experience">
            <h1 id={`${color}s`}>20+</h1>
            <p style={mode?{color:'white'}:{color:"#626262"}}>COMPLETED PROJECTS</p>
          </div>
          <div className="experience">
            <h1 id={`${color}s`}>10+</h1>
            <p style={mode?{color:'white'}:{color:"#626262"}}>HAPPY CUSTOMERS</p>
          </div>
          <div className="experience">
            <h1 id={`${color}s`}>3+</h1>
            <p style={mode?{color:'white'}:{color:"#626262"}}>AWARDS WON</p>
          </div>
        </div>
      </div>


    <div className="horizenatl_line">
        <hr/>
    </div>


    <div className="horizenatl_line">
        <hr/>
    </div>



        <div className="education_part">
            <div className="education_items">
              <div className="deg_icon">
                  <p id={`${color}`}><FaToolbox/></p>
                  <div></div>
              </div>

              <div className="deg_detail">
                <h5>2018 - PRESENT</h5>
                <h1 style={mode?{}:{color:"#626262"}}>WEB DEVELOPER <span> - ENVATO</span></h1>
                <p style={mode?{}:{color:"#626262"}}>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,</p>
              </div>

            </div>
            <div className="education_items">
            <div className="deg_icon">
                  <p id={`${color}`}><FaGraduationCap/></p>
                  <div></div>
              </div>

              <div className="deg_detail">
                <h5>2018 - PRESENT</h5>
                <h1 style={mode?{}:{color:"#626262"}}>WEB DEVELOPER <span> - ENVATO</span></h1>
                <p style={mode?{}:{color:"#626262"}}>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,</p>
              </div>
            </div>

            <div className="education_items">
              <div className="deg_icon">
                  <p id={`${color}`}><FaToolbox/></p>
                  <div></div>
              </div>

              <div className="deg_detail">
                <h5>2018 - PRESENT</h5>
                <h1 style={mode?{}:{color:"#626262"}}>WEB DEVELOPER <span> - ENVATO</span></h1>
                <p style={mode?{}:{color:"#626262"}}>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,</p>
              </div>

            </div>
            <div className="education_items">
            <div className="deg_icon">
                  <p id={`${color}`}><FaGraduationCap/></p>
                  <div></div>
              </div>

              <div className="deg_detail">
                <h5>2018 - PRESENT</h5>
                <h1 style={mode?{}:{color:"#626262"}}>WEB DEVELOPER <span> - ENVATO</span></h1>
                <p style={mode?{}:{color:"#626262"}}>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,</p>
              </div>
            </div>

            <div className="education_items">
              <div className="deg_icon">
                  <p id={`${color}`}><FaToolbox/></p>
                  <div></div>
              </div>

              <div className="deg_detail">
                <h5 >2018 - PRESENT</h5>
                <h1 style={mode?{}:{color:"#626262"}}> WEB DEVELOPER <span> - ENVATO</span></h1>
                <p style={mode?{}:{color:"#626262"}}>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,</p>
              </div>

            </div>
            <div className="education_items">
            <div className="deg_icon">
                  <p id={`${color}`}><FaGraduationCap/></p>
                  <div></div>
              </div>

              <div className="deg_detail">
                <h5>2018 - PRESENT</h5>
                <h1 style={mode?{}:{color:"#626262"}}>WEB DEVELOPER <span> - ENVATO</span></h1>
                <p style={mode?{}:{color:"#626262"}}>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,</p>
              </div>
            </div>
        </div>
    </div>
  );
};

export default About;
