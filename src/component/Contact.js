import React, { useContext } from "react";
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

const Contact = () => {
  const { color, mode } = useContext(appcontext);
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
            <div className="icon_item mail_icon" id={`${color}s`}>
              <HiMailOpen />
            </div>
            <div className="icon_item">
              <h4>MAIL ME</h4>
              <p>jounabbas.react.js@gmail.com</p>
            </div>
          </div>
          <div className="icon_section">
            <div className="icon_item mail_icon" id={`${color}s`}>
              <FaPhoneSquareAlt />
            </div>
            <div className="icon_item">
              <h4>CALL ME</h4>
              <p>+92 315 3357 007</p>
            </div>
          </div>

          <div className="footer_icon">
            <span id={`${color}h`}>
              <GrFacebookOption />
            </span>
            <span id={`${color}h`}>
              <FaTwitter />
            </span>
            <span id={`${color}h`}>
              <FaGithub />
            </span>
            <span id={`${color}h`}>
              <FaLinkedin />
            </span>
          </div>
        </div>

        <div className="item right">
          <div className="form_parent">
            <div className="form_item">
              <input
                type="text"
                placeholder=" YOUR NAME"
                style={mode ? {} : { background: "white", color: "#626262" }}
              />
            </div>
            <div className="form_item">
              <input
                type="text"
                placeholder="YOUR EMAIL"
                style={mode ? {} : { background: "white", color: "#626262" }}
              />
            </div>
            <div className="form_item">
              <input
                type="text"
                placeholder="YOUR OBJECT"
                style={mode ? {} : { background: "white", color: "#626262" }}
              />
            </div>
          </div>

          <div className="text_area">
            <textarea
              rows="6"
              placeholder="YOUR MESSAGE"
              style={mode ? {} : { background: "white", color: "#626262" }}
            ></textarea>
          </div>
          <div className="home_sec6" id="btn">
            <button id={`${color}b`}>
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
