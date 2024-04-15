import React, { useContext } from 'react'
import "../css_component/navebar.css"
import { CiLight } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { MdPerson } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaToolbox } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { NavLink } from 'react-router-dom';
import { appcontext } from '../context/context';
const Navebar = () => {
   const{mode,setmode,color}=useContext(appcontext)
   console.log(color) 
   
  return (
    <div className='nave'>
        <div className={`light_icon ${color}`} >
            {
                mode?<CiLight className='light_mode' onClick={()=>setmode(!mode)} />:
                <CiDark className='light_mode' onClick={()=>setmode(!mode)} />
            } 
             
        </div> 

        <div>
            <ul>
                <li>
                    < NavLink to="/" className={`light_icon ${color}`}  ><IoHome className='light_mode'/>
                        <span className={`${color}`} >HOME</span>
                    </ NavLink>
                </li>
                <li>
                    < NavLink to="/about" className={`light_icon ${color}`} ><MdPerson className='light_mode' />
                        <span className={`${color}`}>ABOUT</span>
                    </ NavLink>
                </li>
                <li>
                    < NavLink to="/portfolio" className={`light_icon ${color}`} ><FaToolbox className='light_mode' />
                        <span className={`${color}`}>PORTFOLIO</span>
                    </ NavLink>
                </li>
                <li>
                    < NavLink to="/contact" className={`light_icon ${color}`} > <HiOutlineMailOpen         className='light_mode' />
                        <span className={`${color}`}>CONTACT</span>
                    </ NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navebar