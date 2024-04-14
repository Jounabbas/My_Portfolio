import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { appcontext } from "../context/context";
import "../css_component/home.css";
import "../css_component/home_responsive.css"
import { GrFormNextLink } from "react-icons/gr";

const Home = () => {
  const navigate = useNavigate();
  const { mode, color } = useContext(appcontext);
  const [setting] = useState(true);
  console.log(setting);
  return (
    <div className="home_sec1">
      <div className="home_sec2">
        <div className="home_sec3" id={`${color}`}>

        </div>
        <div className="home_sec4">
          <img src="https://tunis-next.netlify.app/assets/img/dark.jpg" alt="..." />
        </div>
      </div>

      <div className="home_sec5"> 
        <div className="home_sec6">
          <div className="home_sec7" id={`${color}`} w></div>
          <h1>
            <span id={`${color}s`}>I'M JOUN ABBAS.</span>
          </h1>
          <h1 style={mode ? {} : { color: "black" }}>WEB DEVELOPER</h1>
          <p style={mode ? {} : { color: "black" }}>
            I'm a Tunisian based web designer & front‑end developer focused on
            crafting clean & user‑friendly experiences, I am passionate about
            building excellent software that improves the lives of those around
            me.
          </p>
          <button id={`${color}b`} onClick={() => navigate("/about")}>
            <span
              className="text"
              style={mode ? { color: "white" } : { color: "black" }}
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
