import React, { useContext } from "react";
import "../css_component/about.css";
import "../css_component/about_responsive.css";
import { appcontext } from "../context/context";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import resume from "../joun.pdf";

const About = () => {
  const { color, mode, burger } = useContext(appcontext);
  return (
    <div className="container2">
      <div className="header about_header">
        <h1 id={`${color}t`} style={mode ? {} : { color: "#939393" }}>
          A B O U T - M E{" "}
        </h1>
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
                ajoun0176@gmail.com
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
            <a href={resume} download>
              <button
                id={`${color}b`}
                style={
                  burger
                    ? { zIndex: "1" }
                    : { transition: "all 0s ease-in-out" }
                }
              >
                <span
                  className="text"
                  id={`${color}btn`}
                  style={mode ? { color: "white" } : { color: "#626262" }}
                >
                  DOWNLOAD CV
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
            </a>
          </div>
        </div>

        <div className="about_item2">
          <div className="experience">
            <h1 id={`${color}s`}>3+</h1>
            <p style={mode ? { color: "white" } : { color: "#626262" }}>
              YEARS OF EXPERIENCE
            </p>
          </div>
          <div className="experience">
            <h1 id={`${color}s`}>20+</h1>
            <p style={mode ? { color: "white" } : { color: "#626262" }}>
              COMPLETED PROJECTS
            </p>
          </div>
          <div className="experience">
            <h1 id={`${color}s`}>10+</h1>
            <p style={mode ? { color: "white" } : { color: "#626262" }}>
              HAPPY CUSTOMERS
            </p>
          </div>
          <div className="experience">
            <h1 id={`${color}s`}>3+</h1>
            <p style={mode ? { color: "white" } : { color: "#626262" }}>
              AWARDS WON
            </p>
          </div>
        </div>
      </div>

      <div className="horizenatl_line">
        <hr />
      </div>

      <h1 className="my_skill" style={mode ? {} : { color: "#626262" }}>
        MY SKIL
      </h1>
      <div className="skil_section">
        <div className="skill_detail" style={mode ? {} : { color: "#626262" }}>
          <div
            className="skill_name"
            id={`${color}bor`}
            style={mode ? {} : { color: "#626262" }}
          >
            90%
          </div>
          <h3>REACT</h3>
        </div>
        <div className="skill_detail" style={mode ? {} : { color: "#626262" }}>
          <div
            className="skill_name"
            id={`${color}bor`}
            style={mode ? {} : { color: "#626262" }}
          >
            90%
          </div>
          <h3>REACT-REDUX</h3>
        </div>
        <div className="skill_detail" style={mode ? {} : { color: "#626262" }}>
          <div
            className="skill_name"
            id={`${color}bor`}
            style={mode ? {} : { color: "#626262" }}
          >
            100%
          </div>
          <h3>ANTD DESIGN</h3>
        </div>
        <div className="skill_detail" style={mode ? {} : { color: "#626262" }}>
          <div
            className="skill_name"
            id={`${color}bor`}
            style={mode ? {} : { color: "#626262" }}
          >
            100%
          </div>
          <h3>MATERIAL UI</h3>
        </div>
        <div className="skill_detail" style={mode ? {} : { color: "#626262" }}>
          <div
            className="skill_name"
            id={`${color}bor`}
            style={mode ? {} : { color: "#626262" }}
          >
            30%
          </div>
          <h3>NEXT JS</h3>
        </div>
        <div className="skill_detail" style={mode ? {} : { color: "#626262" }}>
          <div
            className="skill_name"
            id={`${color}bor`}
            style={mode ? {} : { color: "#626262" }}
          >
            70%
          </div>
          <h3>JAVASCRIPT</h3>
        </div>
        <div className="skill_detail" style={mode ? {} : { color: "#626262" }}>
          <div
            className="skill_name"
            id={`${color}bor`}
            style={mode ? {} : { color: "#626262" }}
          >
            80%
          </div>
          <h3>CSS</h3>
        </div>
        <div className="skill_detail" style={mode ? {} : { color: "#626262" }}>
          <div
            className="skill_name"
            id={`${color}bor`}
            style={mode ? {} : { color: "#626262" }}
          >
            70%
          </div>
          <h3>HTML</h3>
        </div>
      </div>

      <div className="horizenatl_line">
        <hr />
      </div>

      <h1 className="education_heading" style={mode ? {} : { color: "#626262" }}>EXPERIENCE & EDUCATION</h1>
      <div className="education_part">
        <div className="exprirnce_part">
            <div className="education_items">
              <div className="deg_icon">
                  <p id={`${color}`}><FaToolbox/></p>
                  <div></div>
              </div>

              <div className="deg_detail">
                <h5>2019 - 2020</h5>
                <h1 style={mode?{}:{color:"#626262"}}>FRONT END DEVELOPER </h1>
                <p style={mode?{}:{color:"#626262"}}>I specialize in crafting captivating user experiences on the web. With a keen eye for design and functionality, I transform concepts into visually stunning and responsive interfaces. Leveraging my expertise in HTML for structuring content, CSS for styling, and JavaScript for dynamic interactions, I create seamless and engaging websites. </p>
              </div>

            </div>


            <div className="education_items">
              <div className="deg_icon">
                  <p id={`${color}`}><FaToolbox/></p>
                  <div></div>
              </div>

              <div className="deg_detail">
                <h5>2020 - PRESENT</h5>
                <h1 style={mode?{}:{color:"#626262"}}> REACT DEVELOPER </h1>
                <p style={mode?{}:{color:"#626262"}}>In 2020, my journey with React was a transformative experience in web development. Exploring React's ecosystem, I delved into its component-based architecture, mastering state management with Redux and context API. </p>
              </div>

            </div>

            <div className="education_items">
              <div className="deg_icon">
                  <p id={`${color}`}><FaToolbox/></p>
                  <div></div>
              </div>

              <div className="deg_detail">
                <h5>2024 - PRESENT</h5>
                <h1 style={mode?{}:{color:"#626262"}}>FULL STACK DEVELOPER </h1>
                <p style={mode?{}:{color:"#626262"}}>In 2024, my next plan is to transition into a Full Stack Developer role, aiming to broaden my expertise across both front-end and back-end technologies. I intend to delve deeper into server-side development, mastering frameworks like Node.js and Express.js. </p>
              </div>

            </div>
        </div>
       

       <div className="degree_part">
       <div className="education_items">
            <div className="deg_icon">
                  <p id={`${color}`}><FaGraduationCap/></p>
                  <div></div>
              </div>

              <div className="deg_detail">
                <h5>2022 - PRESENT</h5>
                <h1 style={mode?{}:{color:"#626262"}}>BACHELOR DEGREE <span> - GCUF</span></h1>
                <p style={mode?{}:{color:"#626262"}}>As a software engineer, I specialize in crafting innovative solutions through code. My expertise lies in designing, building, and maintaining software systems that power the digital world. With a keen eye for problem-solving and a deep understanding of programming languages. </p>
              </div>
            </div>


            <div className="education_items">
            <div className="deg_icon">
                  <p id={`${color}`}><FaGraduationCap/></p>
                  <div></div>
              </div>

              <div className="deg_detail">
                <h5>2020 - 2022</h5>
                <h1 style={mode?{}:{color:"#626262"}}>intermediate  Study <span> - Zakria College</span></h1>
                <p style={mode?{}:{color:"#626262"}}>During my intermediate studies with ICS (Intermediate in Computer Science), I delved into the foundational principles of computer science and technology. This curriculum provided a comprehensive understanding of programming languages.</p>
              </div>
            </div> 

            <div className="education_items">
            <div className="deg_icon">
                  <p id={`${color}`}><FaGraduationCap/></p>
                  <div></div>
              </div>

              <div className="deg_detail">
                <h5>2010 - 2020</h5>
                <h1 style={mode?{}:{color:"#626262"}}>Matric Study<span> - High school jaman shah</span></h1>
                <p style={mode?{}:{color:"#626262"}}>During my matric studies, I immersed myself in computer science, learning the fundamental principles of technology. Exploring topics such as programming basics, hardware, and software, I gained a solid foundation in computer systems .</p>
              </div>
            </div>
       </div>
       
      </div>
    </div>
  );
};

export default About;
