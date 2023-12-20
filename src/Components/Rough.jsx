import React,{useState,useEffect} from 'react'
import Bulb from './Models/bulb-removebg-preview.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
function Rough() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='Bulb-section'>
        <div className='Bulb-section-container'>
        <Parallax pages={3}>
            <ParallaxLayer style={{backgroundColor:'yellow',display:'flex'}}sticky={{start:0,end:2}}
              onScroll={(offset) => console.log('Parallax Offset:', offset)} >
                <div className='bulb-div'>
                        <img src={Bulb} className='bulb'/>
                </div>
                <div className='text-container'>
                  <div className='vertical-bar' >
                      <div className='vertical-bar-color' style={{ height: `${scrollY}px` }}></div>
                      <div className="color-circle"></div>
                  </div>
                </div>
            </ParallaxLayer>
            {/* <ParallaxLayer style={{backgroundColor:'orange'}}>
                
            </ParallaxLayer> */}
        </Parallax>
        </div>

    </div>
  )
}

export default Rough