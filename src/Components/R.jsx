import React,{useState,useEffect} from 'react'
import Bulb from './Models/bulb-removebg-preview.png'

function R() {
    const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let translate = (scrollPosition*0.95+50);
  let height= Math.min(scrollPosition * 0.5,560);
  console.log(scrollPosition);
  console.log(translate);
  console.log(height);
  if(height === 560) {translate=Math.min(1090,translate)};
  return (
    <>
    <div className='Bulb-section'>
        <div className='Bulb-section-container'>
                <div className='bulb-div'>
                        <img src={Bulb} className='bulb' style={{ transform: `translateY(${translate}px)` }}/>
                </div>
                <div className='Mid_section_text_container' style={{ transform: `translateY(${translate}px)` }}>
                  <div className='vertical-bar' >
                      <div className='vertical-bar-color' style={{ height: `${height}px` }}></div>
                      <div className="color-circle"></div>
                  </div>
                </div>
        </div>
    </div>
    <div className='last-section'></div>
    </>
  )
}

export default R