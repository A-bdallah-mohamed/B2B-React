import React from 'react'
import Person from '../components/Person';
import Redcolumn from '../components/Redcolumn';
import GrayColumn from '../components/GrayColumn';
import Header from '../components/Header';
import Casestudies from '../components/Casestudies';
import Latestnews from '../components/Latestnews';
import Last from '../components/Last';
import OrangeCircle from '../components/OrangeCircle';
export default function Homepage() {

    return (

<div className='firstcont'> 
 <Header/>
<div className='firstdiv'>
  <Casestudies/>
  <OrangeCircle />
</div>
<div className='seconddiv'>
 <GrayColumn />
 <Redcolumn />
<Last />
 <Person />
 <Latestnews />
</div>
</div>
  )
}
