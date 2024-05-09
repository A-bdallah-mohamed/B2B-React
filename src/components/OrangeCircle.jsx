import React from 'react'
import useIntersection from '../CustomHooks/useIntersection'
export default function OrangeCircle() {
    const [orangeCircle,IsOrangeCircleinview]= useIntersection()
  return (
    <div ref={orangeCircle} className={`seehowitworks ${IsOrangeCircleinview && 'there'}`}><div>See<br />how it<br />works</div></div>
  )
}
