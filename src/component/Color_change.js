import React ,{useState,useContext} from 'react'
import "../css_component/color_change.css"
import { FiSettings } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { BsDropletFill } from "react-icons/bs"
import { appcontext } from '../context/context'
 
export const Color_change = () => {

    const [setting,setsettig]=useState(true)
    const {setcolor}=useContext(appcontext)
  return (
    
    <div>
         {
            setting?<div className='home_icon'>
            <FiSettings className={`setting ${setsettig}`} onClick={()=>setsettig(!setting)} style={{color:"black"}}/>
        </div>:<div className='home_span'>
            <div><RxCross2 className='cross'onClick={()=>setsettig(!setting)} style={{color:"black"}}/></div>

            <div className='color_pick' onClick={()=>setsettig(!setting)}>
                <BsDropletFill onClick={()=>setcolor("yellow")}/> 
                <BsDropletFill onClick={()=>setcolor("acqua")} style={{color:"#55efc4"}}/> 
                <BsDropletFill onClick={()=>setcolor("pico")} style={{color:"#fd79a8"}}/> 
                <BsDropletFill onClick={()=>setcolor("orange")} style={{color:"#e17055"}}/> 
                <BsDropletFill onClick={()=>setcolor("blue")} style={{color:"#0652DD"}}/> 
                <BsDropletFill onClick={()=>setcolor("rose")} style={{color:"#FDA7DF"}}/> 
                <BsDropletFill onClick={()=>setcolor("disko")} style={{color:"#0fbcf9"}}/> 
                <BsDropletFill onClick={()=>setcolor("red")} style={{color:"#f53b57"}}/> 
                <BsDropletFill onClick={()=>setcolor("green")} style={{color:"#05c46b"}}/> 
            </div>
        </div>
        }

    </div>
  )
}
