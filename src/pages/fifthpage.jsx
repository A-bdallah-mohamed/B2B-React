import React from 'react'
import { useRef , useEffect , useState } from 'react'
import firstpic from '../assets/one.png'
import secondpic from '../assets/two.png'
import thirdpic from '../assets/three.png'
import fourthpic from '../assets/four.png'
import fifthpic from '../assets/five.png'
import sixthpic from '../assets/six.png'
import seventhpic from '../assets/seven.png'
import eightthpic from '../assets/eight.png'
export default function Fifthpage() {
  const scrollcontainer = useRef(null)
 const [scrollposition , setscrollposition] = useState(0)
 const [toggle,settoggle] = useState(false)
  useEffect(()=>{
const scrolldiv = scrollcontainer.current;
const handlewheel = (e)=> {
if (e.deltaY !== 0){
    scrolldiv.scrollLeft  += e.deltaY * 2;
    e.preventDefault()
}
const scroll = scrolldiv.scrollLeft
setscrollposition(scroll)
}
scrolldiv.addEventListener('wheel', handlewheel);
return () => {
    scrolldiv.removeEventListener('wheel', handlewheel);
};
  },[])
  useEffect(()=> {
settoggle(p => !p)
  },[scrollposition])
    return (
        <div className='fifthpagecontainer'>
    <div className='swipercontainer' ref={scrollcontainer}>
        <div className='cardcontainer'>
        <div className={`card softgray ${toggle ? 'cardbig' : ''}`}>
<img  src={firstpic} alt='pic'/>
        </div>
        <p>Name</p>
        <span>Job position</span>
        </div>
        <div className='cardcontainer'>
        <div className={`card softblue ${toggle ? '' : 'cardbig'}`}> 
        <img  src={secondpic} alt='pic'/>

</div>  
<p>Name</p>
        <span>Job position</span>
</div>
<div className='cardcontainer'>
 <div className={`card softred ${toggle ? 'cardbig' : ''}`}>
 <img  src={thirdpic} alt='pic'/>
        </div>
<p>Name</p>
        <span>Job position</span> </div>
        <div className='cardcontainer'>
<div className={`card softnavy ${toggle ? '' : 'cardbig'}`}> 
<img  src={fourthpic} alt='pic'/>
</div> 
<p>Name</p>
        <span>Job position</span> </div>        <div className='cardcontainer'> <div className={`card softgray ${toggle ? 'cardbig' : ''}`}>
        <img  src={fifthpic} alt='pic'/>
        </div> </div>
        <div className='cardcontainer'>
        <div className={`card softred ${toggle ? '' : 'cardbig'}`}> 
        <img  src={sixthpic} alt='pic'/>
</div>  
<p>Name</p>
        <span>Job position</span>
</div>       <div className='cardcontainer'>
        <div className={`card softblue ${toggle ? 'cardbig' : ''}`}>
        <img  src={seventhpic} alt='pic'/>
        </div> 
<p>Name</p>
        <span>Job position</span></div>        <div className='cardcontainer'>
        <div className={`card softnavy  ${toggle ? '' : 'cardbig'}`}> 
        <img  src={eightthpic} alt='pic'/>
</div>
<p>Name</p>
        <span>Job position</span>  </div>
    </div>
    </div>
  )
}
