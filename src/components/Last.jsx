import React from 'react'
import useIntersection from '../CustomHooks/useIntersection'
export default function Last() {
    const [Last,isLastshown] = useIntersection()
  return (
    <div className={`smallcolumn ${isLastshown && 'Lastshown' }`} ref={Last} />
  )
}
