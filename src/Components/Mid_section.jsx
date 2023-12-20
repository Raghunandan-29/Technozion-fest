import React, {useState,useEffect,useRef} from 'react'
import { Canvas } from 'react-three-fiber'
import gsap from 'gsap';
// import {ScrollTrigger} from 'gsap-trial/ScrollTrigger';
import { OrbitControls, ScrollControls } from '@react-three/drei'
import Bulb from './Models/bulb-removebg-preview.png'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import SplitType from 'split-type'

function MidSection() {
  const [isFixed, setIsFixed] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [sPosition, setSPosition] = useState(0);
  const sectionRef = useRef(null);
  const [bSaV, setBSaV] = useState(true); // Set to true initially



  



  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsetTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const currentScrollPosition = window.scrollY;
      setSPosition(currentScrollPosition-sectionOffsetTop);

      setScrollPosition(currentScrollPosition);

      // Check if the top of the section is within the viewport
      const isSectionTopInView = currentScrollPosition >= sectionOffsetTop;

      // Check if the bottom of the section is above the viewport
      const isSectionBottomAboveViewport = currentScrollPosition + window.innerHeight >= sectionOffsetTop + sectionHeight;

      // Set the fixed state based on conditions
      setIsFixed(isSectionTopInView && !isSectionBottomAboveViewport);
      // Check if the bottom of the section is above the bottom of the viewport
      setBSaV(currentScrollPosition + window.innerHeight < sectionOffsetTop + sectionHeight);

    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const containerStyle = {
    position: isFixed ? 'fixed' : 'relative',
    top: isFixed ? '0' : 'auto',
    transform: isFixed || bSaV ? 'none' : 'translateY(1100px)', // Apply translateY(1000px) when isFixed is false and bSaV is true
    zIndex: isFixed ? '100' : 'auto',
  };
  console.log(scrollPosition);
  let height= Math.min((sPosition * 0.5+20),560);

 
  //   const [scrollPosition, setScrollPosition] = useState(0);
  //   const sectionRef = useRef(null);
  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const sectionOffset = sectionRef.current.offsetTop; // Get the offsetTop of the section
  //       setScrollPosition(window.scrollY-sectionOffset);
  //     };

  //     window.addEventListener('scroll', handleScroll);

  //     return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //     };
  //   }, []);

  //   console.log(scrollPosition);
  //   let translate = (scrollPosition*0.95+50);
  //   let height= Math.min((scrollPosition * 0.5+20),560);
  //   console.log(translate);
  //   console.log(height);
  //    // Adjust the transition duration and timing function as needed
  // const transitionStyle = {
  //   transition: 'transform 0.18s ease-in-out', // You can adjust the duration here
  // };

  //   if(height<=20){ translate=Math.max(0,translate)};
  //   if(height === 560) {translate=Math.min(1090,translate)};
//   return (
//     <div className='Mid_section' ref={sectionRef}>
//         <div className='Mid_section_container'>
//             <div className='Mid_section_bulb'>
//               <img src={Bulb} className='bulb' style={{ transform: `translateY(${translate}px)`, ...transitionStyle  }}/>
//             </div>
//             <div className='Mid_section_text_container' style={{ transform: `translateY(${translate}px)`, ...transitionStyle  }}>
//                 <div className='vertical-bar' >
//                     <div className='vertical-bar-color' style={{ height: `${height}px` }}></div>
//                     <div className="color-circle"></div>
//                 </div>
//                 <div className='text_container'>
//                   <h1>HEllo</h1>
//                 </div>
//             </div>
            
//         </div>
//     </div>
//   )
// }



// Calculate opacity and gradient stops based on scroll position
const opacity = Math.min(0.2 + (sPosition / 560), 1);
const gradientStops = `${height}%, transparent ${height}%`;

const maskStyle = {
  backgroundImage: `linear-gradient(to right, transparent ${gradientStops}, white ${gradientStops})`,
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  zIndex: '1',
};

const textContainerStyle = {
  opacity: opacity,
  position: 'relative',
  zIndex: '2',
};

return (
  <div className='Mid_section' ref={sectionRef} >
      <div className='Mid_section_container'style={containerStyle}>
          <div className='Mid_section_bulb'>
            <img src={Bulb} className='bulb' />
          </div>
          <div className='Mid_section_text_container' >
              <div className='vertical-bar' >
                  <div className='vertical-bar-color' style={{ height: `${height}px` }}></div>
                  <div className="color-circle"></div>
              </div>
              <div className="mask" style={maskStyle}></div>
              <div className='text_container' style={textContainerStyle}>
                <p className='reveal-type'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                <p className='reveal-type'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                <p className='reveal-type'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                <p className='reveal-type'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
              </div>
          </div>
          
      </div>
  </div>
)
}

export default MidSection


