import React from 'react'
import useIntersection from '../CustomHooks/useIntersection'
export default function Thirdpage() {
  const [img,isimgshownn] = useIntersection()
  const [textcontainer,istextcontainershown] = useIntersection()

  return (
    <div className='thirdcont'>
        <div className='imgdivv'> 
            <img src='https://static.wixstatic.com/media/fd789c_7deccb4f882e474f83374667f7d7e35f~mv2.gif' ref={img} className={`imgnotshownn ${isimgshownn && 'imgshownn'}`}></img>
            <div className='textdivcontainer' ref={textcontainer}>
            <div className={`TEXT text1 ${istextcontainershown && 'text1shown'}`}>USE A CUSTOM</div>
            <div className={`TEXT text2 ${istextcontainershown && 'text2shown'}`}>FORMULA FOR YOUR</div>
            <div className={`TEXT text3 ${istextcontainershown && 'text3shown'}`}>OWN MARKETING</div>
            <div className={`TEXT text4 ${istextcontainershown && 'text4shown'}`}>SUCCESS</div>
            </div>
        </div>
        </div>
   
  )
}
