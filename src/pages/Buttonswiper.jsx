import React, { useEffect, useState } from 'react'
import useIntersection from '../CustomHooks/useIntersection'
import image1 from '../assets/landone.jpg'
import image2 from '../assets/landtwo.jpg'
import image3 from '../assets/landthree.jpg'
import image4 from '../assets/landfour.jpg'
import { ImEarth } from 'react-icons/im'

export default function Buttonswiper() {
const images = [
    image1,image2,image3,image4
]
const [current,setcurrent]= useState(0)
    const [textone,textonesown] = useIntersection()
    const [texttwo,tettwosown] = useIntersection()
    const [textthree,textthreesown] = useIntersection()
    const [firstimageposition,setfirstimageposition] = useState(0)
const [secondimageposition,setsecondimageposition] = useState(0)
const [thirdimageposition,setthirdimageposition] = useState(0)
const [fourthimageposition,setfourthimageposition] = useState(0)
    const [isanimating,setisanimating] = useState(false)

  
    const previmage = (current - 1 + images.length) % images.length
    const nextimage = (current + 1 ) % images.length
const fourthimage = (current + 2) % images.length
    const next = () =>{
        setcurrent((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
        setisanimating(true)
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
setsecondimageposition(-2 * 711 + 50)
setTimeout(() => {
    setsecondimageposition(2 * 711 + 50)
}, 500);
}
if(current === 1){
setfirstimageposition(-761 )
setTimeout(() => {
    setfirstimageposition(3*761)
}, 500);
}
    },[current])
  return (
    <div className='buttonswipercontainer'>
<div className='buttonswiperfirstetxt'>
    <div ref={textone} className={`firststatic ${textonesown && 'firstshown'}`}>OPEN NEW</div>
    <div ref={texttwo} className={`firststatic ${tettwosown && 'secondshown'}`}>HORIZON FOR YOUR</div>
    <div ref={textthree} className={`firststatic ${textthreesown && 'thirdhown'}`}>BUSINESS</div>
</div>

<div className='buttonswiper'>
<img src={images[0]} className='swiperimage' style={{
    transform : current === 1 ? `translateX(${firstimageposition}px)` 
    : current === 2 ? `translateX(${2*761}px)`
    : current === 3 ? `translateX(${761}px)` 
    : ''
    , opacity: current === 1 ? '0' : '' 
}}></img>
<img src={images[1]} className={`${current === 0 ? 'imagemain' : 'swiperimage'} `} style={{ 
    transform: 
      current === 1 
        ? `translateX(-${current * 711 + 50}px)` 
        : current === 2 
        ? `translateX(${secondimageposition}px)` 
        : current === 3 
        ? `translateX(${1 * 711 + 50}px)`
        : '' , opacity : current === 2 ? '0' : ''
  }}></img>
<img src={images[2]} className='swiperimage'></img>
</div>
<button onClick={next}>next</button>
<button className={`${isanimating ? 'animatebutton' : ''}`}>animate</button>
    </div>
  )
}
