
import React, {useState}from 'react'
import image from '../assets/landscape1.jpg'
import image2 from '../assets/landscape2.jpg'
import image3 from '../assets/landscape3.jpg'
import image4 from '../assets/landscape4.jpg'
import image5 from '../assets/landscape5.jpg'
import { FaLongArrowAltRight } from "react-icons/fa";
export default function Onhoverimage() {
    const [showimage, setshowimage] = useState(null);

    const mouseenter = (index) => {
        setshowimage(index);
    };
    const mouseleave = () => {
        setshowimage(null);
    };
    const Card = (a,b,i,index)=>{
        return(
            <div className='containerscontainer' onMouseEnter={()=>mouseenter(index)} onMouseLeave={mouseleave}>
            <div className='hoverdivcontainer'>
            <div className='realhoverdivfirsttext'>{a}
          </div>
          <div className='fakeone'>{a}</div>
        <div className='hoverdivsecondtext'>{b}</div>
        <img src={i} style={{position:'absolute'}} className={`imagedivnotshowing ${showimage == index ? 'imagedivshown' : ''}`} />
        </div>
        </div>
        )
    }
  return (
    
    <div className='onhoverimagediv' >
        <div className='firsttextcontainer'>
        <div className='fitsttextonhoverdiv'>
            <div className='firstfirsttext'>
                We are helping brands to <br/>begin a new life in the digital <br/> era and leave a competitors
            </div>
            <div className='secondthirdtextcontainer'>
            <div className='firstsecondtext'>
            This is a complete solution,<br/>
with marketing strategy,<br/>
and recommendations for<br/>
budgets, and creatives.
            </div>
            <div className='firstthirdtext'>
                <div className='realtext'>60</div>
                <FaLongArrowAltRight className='relarrow'/>
                <div className='faketext'>60</div>
                <FaLongArrowAltRight className='fakearrow'/>
            </div>

            </div>
        </div>
        <div className='cardscontainero'>
        {Card("Reclaim creative co","Creative & optimization",image5,5)}
        {Card("BigBlaze Coporation","Full marketing solution",image,1)}
        {Card("Noetel & Red word","Analysis A Audit",image2,2)}
        {Card("Olliver studio","Creative & optimization",image3,3)}
        {Card("Greezly Brand Store","Full marketing solution",image4,4)}
        </div>
        </div>


</div>
  )
}
