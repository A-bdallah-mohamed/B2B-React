import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer';
import personimg from '../assets/pngwing.com (2).png'
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from 'react';
import { FaCaretRight } from "react-icons/fa";

export default function Homepage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [lol, viewed] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [a, isit] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [b, isitb] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [c, isitc] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [z, isitz] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [x, isitx] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [zz, isitzz] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [zzz, isitzzz] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
    return (
      <div className='maincontainer'>
        <div className='cont'>
          <div className='firstcont'>
          <header className={`header ${inView && 'in' }`} ref={ref}>
            <nav><ul><li>Products</li><li>Resources</li><li>Support</li></ul></nav>
            <h1>DataBest</h1>
            <nav><ul><li>Company</li><li>Pricing</li><li>Connect</li></ul></nav>
          </header>

   
            <div className='firstdiv'>
            <div className={`casediv ${isit && 'isit' }`} ref={a} >
<div className='Casestudies' /> 
<div className='pplndtxt'>
  <div className='firstppl'/>
  <div className='secndppl'/>
  <div className='ppltxtt'>Ca se <br /> Studies <br /> <FaLongArrowAltRight />
</div>
</div>
            </div>
            <div ref={lol} className={`seehowitworks ${viewed && 'there'}`}><div>See<br />how it<br />works</div></div>
          </div>
          <div className='seconddiv'>
<div className={`graycolumn ${isitc && 'grayc'}`} ref={c}>
  <div className={`textingray ${isitz && 'isitz'}`} ref={z}>
  <div>YOUR BEST</div>
  <div>MARKETING & DATA</div>
  <div>ANALYSER</div>
  <div style={{fontSize:'12px',color:'gray',marginTop:'13px'}}>CREATED BY</div>
  <button className='grownow'>Grow Now <FaCaretRight />
</button>
  </div>
</div>
<div className={`reddishcolumn ${isitx && 'isitx'}`} ref={x}/>
<div className={`persondiv ${isitzz && 'isitzz'}`} ref={zz}>
  <div className='person'>
    <img src={personimg}></img>
  </div>
  <div className='persontext'>
    <h3>Text</h3>
    <h6>text</h6>
  </div>
</div>
<div className={`aiadop ${isitzzz && 'isitzzz'}`} ref={zzz}>
  <div className='Circle'>E</div>
  <div className='aitext'>
    <h5>Lorem Ipsum is simply dummy </h5>
    <h5>Lorem Ipsum has been the <br />industry's standard</h5>
  </div>
</div>
          </div>
  
    </div>
    </div>
    </div>
  )
}
