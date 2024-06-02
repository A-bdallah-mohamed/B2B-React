import React from 'react'
import Header from '../components/Header'
import LeftdivPerson from '../components/secondpageComponents/LeftdivPerson'
import { FaLongArrowAltRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import image1 from '../assets/landone.jpg'
import image2 from '../assets/landtwo.jpg'
import image3 from '../assets/landthree.jpg'
import image4 from '../assets/landfour.jpg'
import { useState, useEffect } from 'react';
export default function PhoneMainsection() {
    const scrollpage = (amount) => {
        window.scrollBy({
          top:amount,
          behavior:'smooth',
        })
        }
        const images = [
          image1,image2,image3,image4
      ]
        const [current,setcurrent]= useState(0)
        const [firstimageposition,setfirstimageposition] = useState(0)
const [secondimageposition,setsecondimageposition] = useState(0)
const [thirdimageposition,setthirdimageposition] = useState(0)
const [fourthimageposition,setfourthimageposition] = useState(0)
    const [isanimating,setisanimating] = useState(false)
const [isdisabled,setisdisabled] = useState(false)
const [pannels, setPannels] = useState(["project one","project two","project three","project four"]);


    const previmage = (current - 1 + images.length) % images.length
    const nextimage = (current + 1 ) % images.length
const fourthimage = (current + 2) % images.length
    const next = () =>{
        setcurrent((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
        setisanimating(true)

        setisdisabled(true)
        setTimeout(() => {
            setisdisabled(false)
        }, 500);
    console.log(previmage,current,nextimage,fourthimage,isanimating)

    }

    useEffect(()=>{
        if(isanimating){
            const timer = setTimeout(() => {
                setisanimating(false)
            }, 500);
        }
    })

    useEffect(()=> {
if(current === 2){
setsecondimageposition(-2 * 761)
setTimeout(() => {
    setsecondimageposition(2 * 761)
}, 500);
}
if(current === 1){
setfirstimageposition(-761)
setTimeout(() => {
    setfirstimageposition(3*821)
}, 500);
}

if(current === 3){
    setthirdimageposition(-4*761)
    setTimeout(() => {
        setthirdimageposition(761)
    }, 500);
    }

    
if(current === 0){
    setfourthimageposition(-4*761)
    setTimeout(() => {
        setfourthimageposition(761)
    }, 500);
    }
    },[current])

    const [menutoggled,setmenutoggled] = useState(false)
const [scrollingactive,setscrollingactive] = useState(true)
    const togglemenu = () => {
        setmenutoggled(p => !p)
        setscrollingactive(p => !p)
    }
    useEffect(()=> {
        document.body.style.overflow = scrollingactive ? 'auto' : 'hidden';
    },[scrollingactive])
  return (
    <>
   
    <div className='PhoneMainsection'>
    <div className={`menu ${menutoggled ? 'menuactive' : ''}`}>
        <div className='exitmenu' onClick={togglemenu} >X</div>
        <ul>
            <li>Products</li>
            <li>Resources</li>
            <li>Support</li>
            <li>Company</li>
            <li>Pricing</li>
            <li>Connect</li>
        </ul>
    </div>
        <div style={{height:'100vh',width:'100vw'}} className='mainsectionphoneee'>
    <header className='phoneheader'>
<div className='logo'>DataBest</div>
<GiHamburgerMenu onClick={togglemenu}/>

  </header>
  <div className='phonemaincontainer'>
  <div className='phonemain'>
<div className='firstphonemaintext'>Your Best</div>
<div className='secondphonemaintext'>Marketing & data</div>
<div className='firstphonemaintext'>Analyser</div>
<div className='buttoncontainer'>
<button className='grownnowbutotn' onClick={()=>scrollpage(804)}>Grow now</button>
</div>
  </div>
  </div>
  </div>
<div className='firsttext'><p><span>DATABEST</span><div style={{display:'flex',gap:'5px',marginLeft:'5px'}}><div> is</div><div> unique</div></div></p> powerful artificial intelligence. it works with marketing data, makes you analyzes, and provides precise results
<div className='innertext'>
<div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors</div>
<div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word
<LeftdivPerson />
</div>
</div>
</div>

  
<div className='beforeaftercomponentphone'>
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


    <div className='halfpage'>
    <div className='fourthmaintext'><p><span>Efficiency</span><div style={{whiteSpace:'nowrap',marginLeft:'5px'}}> is a key</div> </p>due to the power of AI, algorithm has alot of ways to help business to achieve any goals and data results</div>
    <div className='secondtext'>
        <div className='textpart'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors</div>
        <div className='textpart'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word</div>
    
    </div>
</div>


<div className='halfpage'>
<div className='circle1shown' >See<br />more <br />stars</div>
<div className='circle2shown' ><p>1200+</p>Terrabites<br /> of daat</div>
<div className='circle3shown' ><p>98%+</p>Correctness<br/> data</div>
<div className='circle4shown'><p>-37%</p>Campaigns<br/> cost</div>

</div>


    </div>

    </>
  )
}
