import React from 'react'
import useIntersection from '../CustomHooks/useIntersection'

export default function Latestnews() {
const [latestnews,islatestnewsinview]= useIntersection()

  return (
    <div className={`aiadop ${islatestnewsinview && 'isitzzz'}`} ref={latestnews}>
  <div className='Circle'>E</div>
  <div className='aitext'>
    <h5>Lorem Ipsum is simply dummy </h5>
    <h5>Lorem Ipsum has been the <br />industry's standard</h5>
  </div>
</div>
  )
}
