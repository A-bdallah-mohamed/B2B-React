import React from 'react'
import useIntersection from '../CustomHooks/useIntersection'
import personimg from '../assets/pngwing.com (2).png'
export default function Person() {
    const [persononright,isperosninview]= useIntersection()
  return (
    <div className={`persondiv ${isperosninview && 'isitzz'}`} ref={persononright}>
    <div className='person'>
      <img src={personimg}></img>
    </div>
    <div className='persontext'>
      <h3>Text</h3>
      <h6>text</h6>
    </div>
  </div>
  )
}
