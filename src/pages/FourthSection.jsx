import React from 'react'
import useIntersection from '../CustomHooks/useIntersection'
export default function Fourthpage() {
    const [circle1,iscircle1shown] = useIntersection()
    const [circle2,iscircle2shown] = useIntersection()
    const [circle3,iscircle3shown] = useIntersection()
    const [circle4,iscircle4shown] = useIntersection()
    const [text,istextshown] = useIntersection()
  return (
    <div className='fourthcont'>
<div className='halfpage'>
<div className={` circle1 ${iscircle1shown && 'circle1shown'}`} ref={circle1}>See<br />more <br />stars</div>
<div className={` circle2 ${iscircle2shown && 'circle2shown'}`} ref={circle2}><p>1200+</p>Terrabites<br /> of daat</div>
<div className={` circle3 ${iscircle3shown && 'circle3shown'}`} ref={circle3}><p>98%+</p>Correctness<br/> data</div>
<div className={` circle4 ${iscircle4shown && 'circle4shown'}`} ref={circle4}><p>-37%</p>Campaigns<br/> cost</div>
</div>
<div className='halfpage'>
    <div className={`fourthmaintext ${istextshown && 'fourthmaintextshown'}`} ref={text}><p><span>Efficiency</span> is a key </p>due to the power of AI, algorithm has alot of ways to help business to achieve any goals and data results</div>
    <div className='secondtext'>
        <div className='textpart'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors</div>
        <div className='textpart'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word</div>
    </div>
</div>
    </div>
  )
}
