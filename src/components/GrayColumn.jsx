import React from 'react'
import useIntersection from '../CustomHooks/useIntersection'
import { FaCaretRight } from "react-icons/fa";

export default function GrayColumn() {
    const [graycolumn,graycolumninview]= useIntersection()
    const [maintext,ismaintextinview]= useIntersection()
  return (
<div className={`graycolumn ${graycolumninview && 'grayc'}`} ref={graycolumn}>
  <div className={`textingray ${ismaintextinview && 'isitz'}`} ref={maintext}>
  <div>YOUR BEST</div>
  <div>MARKETING & DATA</div>
  <div>ANALYSER</div>
  <div style={{fontSize:'12px',color:'gray',marginTop:'13px'}}>CREATED BY</div>
  <button className='grownow'>Grow Now <FaCaretRight />
</button>
  </div>
</div>
  )
}
