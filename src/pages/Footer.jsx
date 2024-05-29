import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";

export default function Footer() {
  return (
    <div className='footer'>
<div className='sectiononefooter'>
    <div className='firstsectionfirsttext'>
        <div style={{fontSize:'25px', fontWeight:'bold'}}>Website Map</div>
        <div className='textpartcontainerscontaier'>
        <div className='firstsectionsecondetxt'>
            <div className='textpartt'>Product</div>
            <div className='textpartt'>Resourses</div>
        </div>
        <div className='firstsectionsecondetxt'>
            <div className='textpartt'>Support</div>
            <div className='textpartt'>Company</div>
        </div>
        </div>
    </div>
    <div className='firstsectionfirsttext' style={{marginTop:'60px'}}>
        <div style={{fontSize:'25px', fontWeight:'bold'}}>Newsletter our</div>
        <div className='textpartcontainerscontaier'>
            <div className='textpartbetween'>
                <input placeholder='Email address'/>
                <div  className='submitbutton'> GO</div>
            </div>
       
  
        </div>
    </div>
</div>
<div className='sectiontwofooter'>
    <div className='sectiontwofootercontianer'>
    <div>Databest - powerful AI eport <br /> on processing marketing data</div>
    <div className='blackcircle'>D</div>
    <div>Level up your cases <br />with tons of Data</div>
    </div>
</div>
<div className='sectionthreefooter'>
    <div className='threecontainer'> <div className='firstsectionfirsttext'>
        <div style={{fontSize:'25px', fontWeight:'bold'}}>Contacts</div>
        <div className='textpartcontainerscontaier'>
        <div className='firstsectionsecondetxt'>
            <div className='textcontactpart'>Us +123456789</div>
            <div className='textcontactpart'>www.Databest.com</div>
        </div>
        <div className='firstsectionsecondetxt'>
            <div className='textcontactpart'>Databest@gmail.com</div>
            <div className='textcontactpart'>United States. oasdkad</div>
        </div>
        </div>
    </div>
    <div className='firstsectionfirsttext'>
        <div style={{fontSize:'25px', fontWeight:'bold',display:'flex',gap:'20px',alignItems:'center',justifyContent:'center',marginTop:'50px'}}>
            <div className='contactbox'><TiSocialFacebook /></div>
            <div className='contactbox'><FaBehance /></div>
            <div className='contactbox'><FaLinkedinIn /></div>
            <div className='contactbox'><FaInstagram /></div>
            <div className='contactbox'><CiBasketball /></div>
        </div>
    </div>
    <div className='firstsectionfirsttext'>
        <div style={{fontSize:'35px', fontWeight:'bold',marginTop:'50px',display:'flex',alignItems:'center',gap:'20px'}} >
            <div>D</div>
            <div className='column' style={{fontSize:"10px"}}>2022 DataBest Lab <br />® All rights reserved</div>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}
