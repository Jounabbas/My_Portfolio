import React, { useContext } from 'react'
import "../css_component/navebar.css"
import { CiLight } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { MdPerson } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FaToolbox } from "react-icons/fa";
import { CiDark } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom'; 
import { appcontext } from '../context/context';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Navebar = () => { 
   const{mode,setmode,color,burger,setburger}=useContext(appcontext)

 
  return (
    <>
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


    <div className={`ham_burger ${color}`} onClick={()=>setburger(!burger)}  >
            {
                burger?<GiHamburgerMenu/>:<RxCross2/>
            }
    </div>
    <div className={`light_icon ${color} res_light_mod`}>
            {
                mode?<CiLight className='light_mode' onClick={()=>setmode(!mode)} />:
                <CiDark className='light_mode' onClick={()=>setmode(!mode)} />
            } 
             
        </div> 

        <div className={`nave2 ${color}s`} style={burger?{display:"none"}:{width:"100%",transition:"width .5s ease-in-out"}}>
            <ul>
                <li><Link to="/"  onClick={()=>setburger(!burger)}><IoHome className='icons'/> HOME</Link></li>
                <hr></hr>
                <li><Link to="/about" onClick={()=>setburger(!burger)}><MdPerson className='icons'/> ABOUT</Link></li>
                <hr></hr>
                <li><Link to="/portfolio" onClick={()=>setburger(!burger)}>< FaToolbox className='icons'/> PORTFOLIO</Link></li>
                <hr></hr>
                <li><Link to="/contact" onClick={()=>setburger(!burger)}><HiOutlineMailOpen className='icons'/> CONTACT</Link></li>
                <hr></hr>
            </ul>
        </div>
    </>
   
  )
}

export default Navebar