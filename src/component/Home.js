import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { appcontext } from "../context/context";
import "../css_component/home.css";
import "../css_component/home_responsive.css"
import { GrFormNextLink } from "react-icons/gr";
import pic from "../pic.png"
const Home = () => {
  const navigate = useNavigate();
  const { mode, color,burger } = useContext(appcontext);
  const [setting] = useState(true);
  console.log(setting);
  return (
    <div className="home_sec1">
      <div className="home_sec2">
        <div className="home_sec3" id={`${color}`}> 

        </div>
        <div className="home_sec4">
          <img src={pic} alt="..." />
        </div> 
      </div> 
 
      <div className="home_sec5"> 
        <div className="home_sec6">
          <div className="home_sec7" id={`${color}`} w></div>
          <h1>
            <span id={`${color}s`}>I'M JOUN ABBAS.</span>
          </h1>
          <h1 style={mode ? {} : { color: "#626262" }}>WEB DEVELOPER</h1>
          <p style={mode ? {} : { color: "#626262" }}>
          As a React front-end developer, I specialize in building user interfaces and interactive web applications using the React JavaScript library. My skill set includes proficiency in HTML, CSS, and JavaScript, along with a strong understanding of React's component-based architecture, state management solutions like Redux or Context API, and modern front-end development tools and workflows.
          </p>
          <button id={`${color}b`} onClick={() => navigate("/about")} style={burger?{zIndex:"1"}:{ transition: "all 0s ease-in-out"}}>
            <span
              className="text"
              style={mode ? { color: "white" } : { color: "#626262" }}
            >
              MORE ABOUT ME
            </span>{" "}
            <span
              className="span"
              id={color}
              style={mode ? { color: "white" } : { color: "white" }}
            >
              <GrFormNextLink className="ico" />
            </span>{" "}
            <span className="hover_effect" id={color}></span>{" "}
          </button>
        </div>
      </div> 
    </div>
  );
};

export default Home;
