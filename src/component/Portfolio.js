import React, { useContext } from 'react'
import "../css_component/portfolio.css"
import { appcontext } from '../context/context'
import pic1 from "../project1.jpeg"
import pic2 from "../project2.png"
import { Link } from 'react-router-dom'

const Portfolio = () => {
  const {color,mode,burger}=useContext(appcontext)

  return (
    <div className='header3'>
       <div className="header portfolio_header">
        <h1 id={`${color}t`} style={mode?{}:{color:"#939393"}}>M Y  -  W O R K </h1>
      
      </div>
       

       <div className='first_project' >
          <div className='project1_image'>
            <Link target='_blank' to={"https://my-website-ntmb.vercel.app"} ><img src={pic1} alt='...'/></Link>
          </div>
          <div className='project1_description' >
            <h2 style={mode ? {} : { color: "#626262" }}>DESCRIPTION PROJECT</h2>
            <p style={mode ? {} : { color: "#626262" }}>It is simple website to enhance over skill in react js css nad html . Basically i follow the design of game district website. Game district is a gaming website.   In real this website create in html css and javascript. But i create this websites with some change in react js . During making this project i learn some important concept of react js like Routing , Navigation  , proops , React Hooks  and some small logic of react .</p>
           <div style={burger?{zIndex:"1"}:{ transition: "all 0s ease-in-out"}}>
              <Link target='_blank' to={"https://my-website-ntmb.vercel.app"}><button target="_blank" id={`${color}b`}  style={mode ? {} : { color: "#626262" } } >Live Demo <span id={color}></span></button></Link>
             <Link target='_blank' to={"https://github.com/Jounabbas/my-website.git"}> <button id={`${color}b`} style={mode ? {} : { color: "#626262" }}>Git Hub <span id={color}></span></button></Link>
           </div>
          </div>
       </div>


       <div className='first_project' >
         
          <div className='project1_description' >
            <h2 style={mode ? {} : { color: "#626262" }}>PROJECT DESCRIPTION </h2>
            <p style={mode ? {} : { color: "#626262" }}>"Text Utility" is a React project designed to streamline text manipulation tasks effortlessly. With its user-friendly interface, it offers a suite of essential text editing functionalities. Users can conveniently count words, convert text to upper or lower case, and effortlessly eliminate excess spaces with just a few clicks. Additionally, the application provides a convenient "copy" feature, enabling users to swiftly duplicate their edited text for further use. Text Utility empowers users to efficiently manage and refine their text content, making it an indispensable tool for anyone dealing with textual data. 📝✨</p>
           <div style={burger?{zIndex:"1"}:{ transition: "all 0s ease-in-out"}}>
              <Link target='_blank ' to={"https://news-app-fxuk.vercel.app/"}><button id={`${color}b`}  style={mode ? {} : { color: "#626262" } }>Live Demo <span id={color}></span></button></Link>
             <Link target='_blank' to={"https://github.com/Jounabbas/NewsApp.git"}> <button id={`${color}b`} style={mode ? {} : { color: "#626262" }}>Git Hub <span id={color}></span></button></Link>
           </div>
          </div>
          <div className='project1_image text_utility' style={{boxShadow:"0px 0px 5px gray"}} >
            <Link target='_blank' to={"https://news-app-fxuk.vercel.app/"} ><img src={pic2} alt='...'/></Link>
          </div>
       </div>
    </div>
  )
}

export default Portfolio 