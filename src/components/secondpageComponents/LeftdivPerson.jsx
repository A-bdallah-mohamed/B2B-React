import React from 'react'
import Personimg from '../../assets/—Pngtree—man in shirt smiles and_13146348.png'
import useIntersection from '../../CustomHooks/useIntersection'
import FulluseIntersection from '../../CustomHooks/Fulluseintersection'
export default function LeftdivPerson() {
    const [leftdiv,isleftdivshown] = useIntersection()
    const [img,isimgshown] = FulluseIntersection()
  return (
   
    <div className='leftpersondiv' ref={leftdiv}>
        <img src={Personimg} ref={img} className={`imgnotshown ${isimgshown && 'imgshown'}`} />
    </div>

  )
}
