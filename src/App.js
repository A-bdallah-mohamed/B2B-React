
  import './App.css';
import Secondpage from './pages/SecondSection';
  import Homepage from './pages/MainSection';
import Thirdpage from './pages/ThirdSection';
import Fourthpage from './pages/FourthSection';
import Swiper from './pages/Swiper';
import Onhoverimage from './pages/Onhoverimage';
import Buttonswiper from './pages/Buttonswiper';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

  function App() {
    return (
      <div className='maincontainer'>
<div className='cont'>
<Homepage />
<Secondpage />
<Thirdpage />
<Fourthpage />
<Swiper />
<Onhoverimage />

</div>
<Buttonswiper />
</div>

    );
  }

  export default App;
