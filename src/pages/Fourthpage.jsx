import React from 'react'
import useIntersection from '../CustomHooks/useIntersection'
export default function Fourthpage() {
    const [circle1,iscircle1shown] = useIntersection()
    const [circle2,iscircle2shown] = useIntersection()
    const [circle3,iscircle3shown] = useIntersection()
    const [circle4,iscircle4shown] = useIntersection()
  return (
    <div className='fourthcont'>
<div className='halfpage'>
<div className={` circle1 ${iscircle1shown && 'circle1shown'}`} ref={circle1}>See<br />more <br />stars</div>
<div className={` circle2 ${iscircle2shown && 'circle2shown'}`} ref={circle2}><p>1200+</p>Terrabites<br /> of daat</div>
<div className={` circle3 ${iscircle3shown && 'circle3shown'}`} ref={circle3}><p>98%+</p>Correctness<br/> data</div>
<div className={` circle4 ${iscircle4shown && 'circle4shown'}`} ref={circle4}><p>-37%</p>Campaigns<br/> cost</div>
</div>
<div className='halfpage'>
    
</div>
    </div>
  )
}
