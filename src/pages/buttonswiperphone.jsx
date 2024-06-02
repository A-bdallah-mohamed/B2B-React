import React,{useState} from 'react'
import image1 from '../assets/landone.jpg'
import image2 from '../assets/landtwo.jpg'
import image3 from '../assets/landthree.jpg'
import image4 from '../assets/landfour.jpg'

export default function Buttonswiperphone() {
    const images = [
        image1,image2,image3,image4
    ]
    const pannels = ["project one","project two","project three","project four"]
    const [current,setcurrent]= useState(0)
    const nextarticle = () => {
        setcurrent((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
 }
   return (
    <div className='buttonswiperphone'>
        <img  src={images[current]}/>
        <div className='pannnnellscontainer'>
        {pannels.map((panel,index) => (
            <div key={index} className={`panelphone ${current == index ? 'currentpannnel' : ''}`}></div>
        ))}
        </div>
        <div className='paneltextphone'>{pannels[current]}</div>

        <button onClick={nextarticle}>next</button>
    </div>
  )
}
