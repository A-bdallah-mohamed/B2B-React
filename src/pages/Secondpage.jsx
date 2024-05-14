import React from 'react'
import LeftdivPerson from '../components/secondpageComponents/LeftdivPerson'
import useIntersection from '../CustomHooks/useIntersection'
import FulluseIntersection from '../CustomHooks/Fulluseintersection';
import { FaLongArrowAltRight } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
export default function Secondpage() {
    const [text,istextshown] = useInView({
      triggerOnce: true,
      threshold: 0.5
    });

    const [data,isdatashown] = useIntersection()
  return (
    <>
    <div className='secondcont'>
        <div className='flexrow'>
<LeftdivPerson />
<div className='secondcontain'>

<div className={`firsttext ${istextshown && 'textshown'}`} ref={text}><p><span>DATABEST</span> is unique</p> powerful artificial intelligence. it works with marketing data, makes you analyzes, and provides precise results
<div className='innertext'>
<div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors</div>
<div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word

</div>
</div>
</div>
</div>
    </div>
   
    </div>
    
    <div className={`beforeaftercomponent ${isdatashown && 'datashown'}`} ref={data}>
<div className='div1'>
  <div className='div1container'>
<div className='peoplediv'>
  <div className='person1'></div>
  <div className='person2'></div>
  <div className='person3'></div>
</div>
<div style={{transform:'translateX(20%)'}}>Our team<br />works with<br /><FaLongArrowAltRight /></div>
</div>
</div>
<div className='div2'>
<div style={{fontSize:'32px',fontWeight:'bold'}}>44</div>
<div style={{fontWeight:'500'}}>Companies</div>
</div>
<div className='div3'>
<div style={{fontSize:'32px',fontWeight:'bold'}}>32</div>
<div style={{fontWeight:'500'}}>Bussiness owner</div>
</div>
<div className='div4'>
<div style={{fontSize:'32px',fontWeight:'bold'}}>500+</div>
<div style={{fontWeight:'500'}}>Data</div>
</div>
<div className='div5'>
<div style={{fontSize:'32px',fontWeight:'bold'}}>81+</div>
<div style={{fontWeight:'500'}}>Languages</div>
</div>
    </div>
    </>
  )
}
