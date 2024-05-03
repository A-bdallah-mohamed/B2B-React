import React from 'react'
import { useRef } from 'react'
import { useInView } from 'react-intersection-observer';
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
    return (
      <div className='maincontainer'>
        <div className='cont'>
          <div className='firstcont'>
          <header className={`header ${inView ? 'in' : ''}`} ref={ref}>
            <nav><ul><li>Products</li><li>Resources</li><li>Support</li></ul></nav>
            <h1>DataBest</h1>
            <nav><ul><li>Company</li><li>Pricing</li><li>Connect</li></ul></nav>
          </header>

   
            <div className='firstdiv'>
            <div className={`casediv ${isit? 'isit':''}`} ref={a} >
<div className='Casestudies' /> 
<div className='pplndtxt'>
  <div className='firstppl'/>
  <div className='secndppl'/>
  <div>Case <br /> Studies</div>
</div>
            </div>
            <div ref={lol} className={`seehowitworks ${viewed ? 'there':''}`}><div>See<br />how it<br />works</div></div>
          </div>
          <div className='seconddiv'>
<div className={`graycolumn ${isitc ? 'grayc' : ''}`} ref={c}/>
          </div>
   <div className='thirddiv'></div>
    </div>
    </div>
    </div>
  )
}
