import React, { useContext } from "react";
import "../css_component/about.css";
import { appcontext } from "../context/context";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Flex, Progress } from 'antd';



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
              <span style={mode ? { color: "white" } : { color: "black" }}>
                Joun
              </span>
            </p>
            <p>
              Last Name :{" "}
              <span style={mode ? { color: "white" } : { color: "black" }}>
                Abbas
              </span>
            </p>
            <p>
              Age :{" "}
              <span style={mode ? { color: "white" } : { color: "black" }}>
                18
              </span>
            </p>
            <p>
              Nationality :{" "}
              <span style={mode ? { color: "white" } : { color: "black" }}>
                Pakistan
              </span>
            </p>
            <p>
              Freelance :{" "}
              <span style={mode ? { color: "white" } : { color: "black" }}>
                Available
              </span>
            </p>
          </div>

          <div className="about_me">
            <p>
              Address :{" "}
              <span style={mode ? { color: "white" } : { color: "black" }}>
                Jamman Shah
              </span>
            </p>
            <p>
              Email :{" "}
              <span style={mode ? { color: "white" } : { color: "black" }}>
                jounabbas@react.js@gmail.com
              </span>
            </p>
            <p>
              Phone :{" "}
              <span style={mode ? { color: "white" } : { color: "black" }}>
                +92 315 3357007
              </span>
            </p>
            <p>
              Religion :{" "}
              <span style={mode ? { color: "white" } : { color: "black" }}>
                Islam
              </span>
            </p>
            <p>
              Langages :{" "}
              <span style={mode ? { color: "white" } : { color: "black" }}>
                Urdu , English
              </span>
            </p>
          </div>

          <div className="home_sec6 about_btn" id="btn">
            <button id={`${color}b`}>
              <span
                className="text" id={`${color}btn`}
                style={mode ? { color: "white" } : { color: "black" }}
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
            <p style={mode?{color:'white'}:{}}>YEARS OF EXPERIENCE</p>
          </div>
          <div className="experience">
            <h1 id={`${color}s`}>20+</h1>
            <p style={mode?{color:'white'}:{}}>COMPLETED PROJECTS</p>
          </div>
          <div className="experience">
            <h1 id={`${color}s`}>10+</h1>
            <p style={mode?{color:'white'}:{}}>HAPPY CUSTOMERS</p>
          </div>
          <div className="experience">
            <h1 id={`${color}s`}>3+</h1>
            <p style={mode?{color:'white'}:{}}>AWARDS WON</p>
          </div>
        </div>
      </div>


    <div className="horizenatl_line">
        <hr/>
    </div>


        <div className="skil">

        </div>
    </div>
  );
};

export default About;
