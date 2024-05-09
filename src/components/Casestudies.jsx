import React from 'react'
import useIntersection from '../CustomHooks/useIntersection'
import { FaLongArrowAltRight } from "react-icons/fa";
export default function Casestudies() {
    const [Casestudies,casestudiesinview]= useIntersection()
  return (
    <div className={`casediv ${casestudiesinview && 'isit' }`} ref={Casestudies} >
    <div className='Casestudies' /> 
    <div className='pplndtxt'>
      <div className='firstppl'/>
      <div className='secndppl'/>
      <div className='ppltxtt'>Case <br /> Studies <br /> <FaLongArrowAltRight />
    </div>
    </div>
                </div>
  )
}
