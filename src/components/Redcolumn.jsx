import React from 'react'
import useIntersection from '../CustomHooks/useIntersection'
import FulluseIntersection from '../CustomHooks/Fulluseintersection'
export default function Redcolumn() {
    const [redcolumn,isredcolumninview]= useIntersection()
    const [realredcolumn,isrealredcolumninview]= FulluseIntersection()
  return (
    <div className={`reddishcolumn ${isredcolumninview && 'isitx'}`} ref={redcolumn} >
    <div className={`realredcolumn ${isrealredcolumninview && 'isredfull'}`} ref={realredcolumn}></div>
  </div>
  )
}
